const app = require("express").Router()
const Note = require("../models/note");

app.get("/", (request, response) => {
  Note.find({}).then((result) => {
    response.json(result);
  });
})

//creating the '/api/notes/:id' route for a 'get' method request
app.get("/:id", (request, response, next) => {
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
app.put('/:id' , (request, response, next) => {
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

app.delete('/:id', (request, response, next) => {
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

app.post('/', (request, response, next) =>{
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

module.exports = app;