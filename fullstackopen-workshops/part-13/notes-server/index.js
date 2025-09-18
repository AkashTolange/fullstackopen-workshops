// index.js
require("dotenv").config();
// const { Pool } = require("pg");


//mongoose lae lera ko jastae ho 
const { Sequelize, QueryTypes, Model, DataTypes} = require("sequelize");


const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// PostgreSQL connection pool
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, { 
  dialectOptions: { 
    ssl: { 
      require: true,
      rejectUnauthorized: false,
    },
  },
});


// Middleware
app.use(express.json());

//schema: note Schema
class Note extends Model {}
Note.init(
  {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: { 
      type: DataTypes.TEXT,
      allowNull: false,
    },
    important: { 
      type: DataTypes.BOOLEAN,
    },
    date: { 
      type: DataTypes.DATE,
    },
  },
  { 
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "note",
  }
);


// GET all notes
app.get("/api/notes", async (req, res) => {
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

// app.post("/api/notes", async(req, res) => { 
//   console.log(req.body);
//   const note = await Note.create(req.body);
//   res.json(note);
// })

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
