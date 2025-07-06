const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
  // content: String,
  //only works for post not while updating 
  content: {
    type: String,
    minLength: 5,
    required: true,
    user: {
      type: mongoose.Schema.Types.ObjectId, //yo type reference chae mongoose db le deko ha hae
      ref: 'User', // Reference to the User model
    }
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



// const Note = mongoose.model('Note', noteSchema)
//yo Note vane ko mongoose bata banaeyeko object ho, mongodb sanga connect garnw ko lage 
module.exports = mongoose.model('Note', noteSchema)
