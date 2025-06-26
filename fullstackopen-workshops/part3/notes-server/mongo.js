const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const url = process.env.MONGODB_URI;

// const url = `mongodb+srv://tolangeakash753:${password}@cluster0.rfc1bk0.mongodb.net/notesApp?retryWrites=true&w=majority&appName=Cluster0`


//ORM & ODM
mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

//object 
const note = new Note({
  content: 'HTML is easy',
  important: true,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})