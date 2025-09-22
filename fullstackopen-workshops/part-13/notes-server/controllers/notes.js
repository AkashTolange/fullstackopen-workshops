const app = require("express").Router()
const jwt = require("jsonwebtoken")
const { SECRET } = require("../utils/config")


const noteFinder = async(req, res, next) => {
  req.note = await Note.findByPk(req.params.id)
  next()
}

//importing
const { Note, User } = require("../models/index")


//this is also middleware vaye hae
//using tokenExtractor to decode the userId from token 
const tokenExtractor = (req, res, next) => { 
  const authorization = req.get("authorization")
  if(authorization && authorization.toLowerCase().startsWith('bearer')) {
    try { 
      req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
    } catch(err){ 
      return res.status(401).json({ error: 'token invalid'})
    }
  } else { 
    return res.status(401).json({ error: 'token missing'})
  }
  next();
}

// GET all notes
app.get("/", async (req, res) => {
  try {
    // const result = await sequelize.query("SELECT * FROM notes",{
    //   type: QueryTypes.SELECT
    // });
    // res.json(result);

    //schema banayo ane chalayo matra
    // const notes = await Note.findAll();  want to show userId , name , blah blah ...
    const notes = await Note.findAll({ 
      attributes: { exclude: ['userId']},
      include: { 
        model: User, //need to import
        attributes: ['name', "username"]
      }
    });

    res.json(notes);
  } catch (err) {
    console.error("Error fetching notes:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/", tokenExtractor, async(req, res) => { 
  console.log(req.body);
  //aba notes rw user pane connected vaye pache , content rw imp tw aayo tara user_id kaha bata aauxa ni 
  //aba hamle api call garda token mw huncha user id , rw pathau dw , token mw user id lae decrypt garnu parxa 
  //token lae padhe decrypt garne
  //little confusing but it's easy 
  req.body.userId = req.decodedToken.id        //camel case mw leknu parxa for underscore ko lage
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
