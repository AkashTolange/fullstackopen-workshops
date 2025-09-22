
const { Model, DataTypes} = require("sequelize");

const {sequelize} = require("../utils/db")
// Middleware
// app.use(express.json());

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


//what does it do?? database mw connect gare rw  Note model ko , notes vanne table xa ki xaina hernw janxa
//mathe ko jasto schema banae dinxa
// Note.sync();

module.exports = Note;