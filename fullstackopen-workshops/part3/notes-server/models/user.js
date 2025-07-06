const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, // Ensure username is unique
    required: true,
    minLength: 3, // Minimum length for username  
  },
  name: String,
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
    delete returnedObject.passwordHash;
  },
})

userSchema.plugin(uniqueValidator)

// const Note = mongoose.model('Note', userSchema)
//yo Note vane ko mongoose bata banaeyeko object ho, mongodb sanga connect garnw ko lage 
module.exports = mongoose.model('User', userSchema)
