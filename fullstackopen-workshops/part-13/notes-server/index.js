// index.js

const express = require("express");
const app = express();

const notesRouter = require("./controllers/notes")
const {PORT} = require("./utils/config")
const {connectToDatabase} = require('./utils/db')
// PostgreSQL connection pool
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });


app.use("/api/notes", notesRouter);


const start = async() => { 
  await connectToDatabase()
  app.listen(PORT, () => { 
    console.log( `server running on port ${PORT}`)
  })
}

start();

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
