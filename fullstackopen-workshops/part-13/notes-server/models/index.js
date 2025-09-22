const  Note  = require("./note")
const  User  = require("./user")

//to to show relation between note and user
//added relation between User and Note

User.hasMany(Note)                                 //Note table ko record chae belongs to user vane ko 
Note.belongsTo(User)                               //rw maile yade kunae new record thape vane it belongs to User too
Note.sync({ alter: true})
User.sync({ alter: true})

module.exports = { Note, User}