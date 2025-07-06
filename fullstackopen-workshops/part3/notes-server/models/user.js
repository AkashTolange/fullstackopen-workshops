const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  username: String,
  user: String,
  passwordHash: String,
  notes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note', // Reference to the Note model
    },
  ],
})

//sir le copy paste garnu vako thiyo
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // delete passwordHash;
  },
})



// const Note = mongoose.model('Note', userSchema)
//yo Note vane ko mongoose bata banaeyeko object ho, mongodb sanga connect garnw ko lage 
module.exports = mongoose.model('User', userSchema)
