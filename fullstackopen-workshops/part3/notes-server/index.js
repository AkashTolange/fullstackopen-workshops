
// const http = require("http");
const express = require('express');
const app = express();
const cors = require("cors");

//use express.json() to read json objects in the request
app.use(express.json())
//
app.use(cors());

//for serving html
app.use(express.static("dist"));

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method) //logs every incoming request's method , path and 
  console.log('Path:  ', request.path)   // body for debugging or monitoring.
  console.log('Body:  ', request.body)
  console.log('---')
  // return response.json({message: "Helllo"})
  next()
  // console.log("after next");
}


app.use(requestLogger);
console.log("after app use");

//notes vanne array xa
let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    id: "4",
    content: "Get and post are the most important methods of http protocol",
    important: false,
  }
];

//api
// app.get('/', (request, response) => {
//     response.send("<h1>Hello world!</h1>");
// })



app.get("/api/notes", (request, response) => {
    response.json(notes);
})

//creating the '/api/notes/:id' route for a 'get' method request
app.get("/api/notes/:id", (request, response) => {
    const myId = request.params.id;
    const myNote = notes.find((note) => note.id === myId); //enter note object is returned
    //what if it does not find then what 
    if (myNote ){
        response.json(myNote);
    } else {
        response.status(300).send(`There are no notes at${myId}`); //not found status
    }
 
});

//put 
// app.put('/api/notes/:id' , (request, response) => {
//  const myId = Number(request.params.id);
//  const updatedNote = request.body;
//  let noteFound = false;
//  notes = notes.map((note )=> {
//   if ( note.id !== myId) return note;
//   else {
//     noteFound = true;
//     return updatedNote;
//   }
//  })

//  if ( noteFound ){
//   response.status(202).json(updatedNote);
//  } else {
//   response.status(404).send(`There are no notes at ${myId}`);
//  }
// })

//put - IMPORTANT: This was commented out and has been fixed
app.put('/api/notes/:id' , (request, response) => {
  const myId = request.params.id; // id from URL is a string
  const body = request.body; // updated note data from request body

  // If the content is missing from the request body, return a 400 Bad Request
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    });
  }

  // Find the note to update
  const noteToUpdate = notes.find(n => n.id === myId);

  if (!noteToUpdate) {
    // If note not found, return 404 Not Found
    return response.status(404).send(`Note with ID ${myId} not found.`);
  }

  // Create the updated note object, preserving the existing ID
  // The 'important' field is toggled on the frontend and sent in the body
  const updatedNote = {
    ...noteToUpdate, // Keep existing properties
    content: body.content, // Update content from request body
    important: body.important // Update importance from request body
  };

  // Update the notes array
  notes = notes.map(note => note.id === myId ? updatedNote : note);

  // Send the updated note back to the client with 200 OK status
  response.json(updatedNote);
});



//creating the /api/notes/:id route for a 'delete' method request
app.delete("/api/notes/:id", (request, response) => {
    const myId = request.params.id;
    notes = notes.filter((note) => note.id !== myId);

    response.status(204).send(`The note at id ${myId} has been deleted`);
    // response.status(204).end();
})

//creating the 'api/note' route for a 'post' method request
app.post("/api/notes", (request, response) => { 
    const myNewPost = request.body;
    // console.log(myNewPost);
    myNewPost.id =notes.length + 1;
    notes.push(myNewPost);
    response.status(201).json(myNewPost);

})

//we are writing our own code 
app.use((request, response, next) => { 
    response.status(404).send("no code available to handle this request");
    // next();
})


// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/json" });
//   // response.end('Hello World');
// //   response.end("<h1>Hello World</h1>");
//   response.end(JSON.stringify(notes));
// });

// const PORT = 3005;
// const PORT = process.env.PORT ? process.env.PORT : 3005;
const PORT = process.env.PORT ? process.env.PORT : 3005;
app.listen(PORT);

console.log(`Server running on port ${PORT}`);
