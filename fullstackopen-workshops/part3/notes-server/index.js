
// const http = require("http");
const express = require('express');
const app = express();
const cors = require("cors");

const mongoose = require('mongoose')
require("dotenv").config();

const url = process.env.MONGODB_URI;


// learn about middleware vs express ko request handler kasare kun order mw run hernu parxa hae 

//ORM & ODM
mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  // content: String,
  //only works for post not while updating 
  content: {
    type: String,
    minLength: 5,
    required: true,
  },
  important: Boolean,
})

//sir le copy paste garnu vako thiyo
noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
})



const Note = mongoose.model('Note', noteSchema)
//yo Note vane ko mongoose bata banaeyeko object ho, mongodb sanga connect garnw ko lage 



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

//aba dekhe no need as data persists, database bata aauxa 
// let notes = [
//   {
//     id: "1",
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: "2",
//     content: "Browser can execute only JavaScript",
//     important: false,
//   },
//   {
//     id: "3",
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
//   {
//     id: "4",
//     content: "Get and post are the most important methods of http protocol",
//     important: false,
//   }
// ];

//api
// app.get('/', (request, response) => {
//     response.send("<h1>Hello world!</h1>");
// })

let notes =[];

app.get("/api/notes", (request, response) => {
  Note.find({}).then((result) => {
    response.json(result);
  });
})

//creating the '/api/notes/:id' route for a 'get' method request
app.get("/api/notes/:id", (request, response, next) => {
    Note.findById(request.params.id).then(result =>{ 
    // const myId = request.params.id;
    // const myNote = notes.find((note) => note.id === myId); //enter note object is returned
    //what if it does not find then what 
    if (result ){
        response.json(result);
    } else {
        response.status(404).send(`There are no notes at${request.params.id}`); //not found status
    }
   }).catch((e) =>{
    next(e);
    // console.log(err);
    // response.status(500).send(`${request.params.id} is not in the required format`)
   })
    
 
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
app.put('/api/notes/:id' , (request, response, next) => {
  // const myId = request.params.id; // id from URL is a string
  const body = request.body; // updated note data from request body

  const note ={
    content: body.content,
    important: body.important
  };

  Note.findByIdAndUpdate(request.params.id, note, { new: true, runValidators: true})
  .then((updatedNote) => { 
    response.json(updatedNote);
  })
  .catch((error) => next(error));
  
});



//creating the /api/notes/:id route for a 'delete' method request
// app.delete("/api/notes/:id", (request, response) => {
//     const myId = request.params.id;
//     notes = notes.filter((note) => note.id !== myId);

//     response.status(204).send(`The note at id ${myId} has been deleted`);
//     // response.status(204).end();
// })

app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

//creating the 'api/note' route for a 'post' method request
// app.post("/api/notes", (request, response) => { 
//     const myNewPost = request.body;
//     // console.log(myNewPost);
//     myNewPost.id =notes.length + 1;
//     notes.push(myNewPost);
//     response.status(201).json(myNewPost);

//     // const note = new Note({
// //   content: "HTML is Easy",
// //   important: true,
// // });

// // note.save().then((result) => {
// //   console.log("note saved!");
// //   mongoose.connection.close();
// // })
// })

app.post('/api/notes', (request, response, next) =>{
  const body = request.body;
  
  //new post banauda khere handle garxa error handle garxa schema le tara update garda herdainw 
  //this error handling no need as we have defined that error handling built in xa , mongoose ko schema error handling mw herxa  
  // if( body.content === undefined){
  //   return response.status(400).json({error: "content missing"});
  // }

const note = new Note({
  content: body.content,
  important: body.important || false,
});

note.save().then((saveNote) => {
  response.json(saveNote);
}).catch( e => {
  // console.log(e);
  next(e);
});

})

//we are writing our own code 
app.use((request, response, next) => { 
    response.status(404).send("no code available to handle this request");
    // next();
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  //mongoose schema validation and let's handle error ok
  if( error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler);


//moving error handling into middleware

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/json" });
//   // response.end('Hello World');
// //   response.end("<h1>Hello World</h1>");
//   response.end(JSON.stringify(notes));
// });

// const PORT = 3005;
// const PORT = process.env.PORT ? process.env.PORT : 3005;
// const PORT = process.env.PORT;
app.listen(process.env.PORT);

console.log(`Server running on port ${process.env.PORT}`);
