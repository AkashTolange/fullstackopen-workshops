const app = require("express").Router();
// const User = require("../models/note");
const User = require("../models/user");

app.get("/", async (request, response) => {
  let result = await User.find({});
  response.json(result);
});



//using async and await 
app.get("/:id", async (request, response, next) => {
   try {
    const note = await User.findById(request.params.id);
    if (note) {
      response.json(note);
    } else {
      response.status(404).end();
   }
  } catch (exception) {
    next(exception);
  }
});


//put - IMPORTANT: This was commented out and has been fixed
// app.put("/:id", (request, response, next) => {
//   // const myId = request.params.id; // id from URL is a string
//   const body = request.body; // updated note data from request body

//   const note = {
//     content: body.content,
//     important: body.important,
//   };

//   User.findByIdAndUpdate(request.params.id, note, {
//     new: true,
//     runValidators: true,
//   })
//     .then((updatedNote) => {
//       response.json(updatedNote);
//     })
//     .catch((error) => next(error));
// });




//using await and async
//creating the /api/notes/:id route for a 'delete' method request

// app.delete("/:id", async (request, response, next) => {
//    try {
//     await User.findByIdAndRemove(request.params.id);
//     response.status(204).end();
//   } catch (exception) {
//     next(exception);
//   }
// });



app.post("/", async (request, response, next) => {
  const body = request.body;

  const user = new User({
    content: body.content,
    important: body.important || false,
  });

 
  //using async/await
  try { 
    const saveNote = await note.save();
    response.status(201).json(saveNote);
  } catch (error) {
      next(error);
  }
});

module.exports = app;
