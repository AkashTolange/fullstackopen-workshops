const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
  // content: String,
  //only works for post not while updating 
  content: {
    type: String,
    minLength: 5,
    required: true,
  },
  important: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId, //yo type reference chae mongoose db le deko ha
    ref: 'User', // Reference to the User model
  },
})

//sir le copy paste garnu vako thiyo
noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // delete returnedObject.user; // Remove user field from the response
  },
})



// const Note = mongoose.model('Note', noteSchema)
//yo Note vane ko mongoose bata banaeyeko object ho, mongodb sanga connect garnw ko lage 
module.exports = mongoose.model('Note', noteSchema)
