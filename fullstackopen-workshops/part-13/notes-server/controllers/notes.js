require("dotenv").config();
// const { Pool } = require("pg");
const express = require("express");
const app = require("express").Router()


const noteFinder = async(req, res, next) => {
  req.note = await Note.findByPk(req.params.id)
  next()
}

//importing
const { Note } = require("../models/index")

// GET all notes
app.get("/", async (req, res) => {
  try {
    // const result = await sequelize.query("SELECT * FROM notes",{
    //   type: QueryTypes.SELECT
    // });
    // res.json(result);

    //schema banayo ane chalayo matra
    const notes = await Note.findAll();
    res.json(notes);
  } catch (err) {
    console.error("Error fetching notes:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/", async(req, res) => { 
  console.log(req.body);
  const note = await Note.create(req.body);
  res.json(note);
})


//to get id
app.get("/:id", noteFinder, async(req, res) => { 
  //yo code tw tala pane xa , how to handle this or refactor using middleware
  // const note = await Note.findByPk(req.params.id);
  if ( req.note ) {
    res.json(req.note);
  } else { 
    res.status(404).send("no data found");
  }
});

//put 
app.put('/:id',noteFinder, async(req, res) => { 
  //yo code tw tala pane xa , how to handle this or refactor using middleware
  // const note = await Note.findByPk(req.params.id);
  // console.log(note);
  // console.log(note.toJSON());
  // console.log(JSON.stringify(note))
  console.log(JSON.stringify(req.note, null, 2));
  
  if ( req.note ) { 
    req.note.important = req.body.important
    await req.note.save()
    res.json(req.note)
  } else { 
    res.status(404).end()
  }
})

module.exports = app;
