const express = require('express');
const path = require('path')


const App = express();
App.use(express.static(path.join(__dirname, "dist")));

const notes =[
    { 
        id: 1, 
        content: "HTML is easy",
        important: true,
        user: "Matti Luukhainen",
    },
    { 
        id: 2, 
        content: "Browser can execute only javaScript",
        important: false,
        user: "Matti Luukhainen",
    },
    {
        id: 1, 
        content: "Most important methods of HTTP-protocol are GET and POST",
        important: true,
        user: "Arto Hellas",
    }
]

App.get('/api/notes', async(request, response) => { 
    response.json(notes);
})

//sends index.html
//using version express@4
App.get("*", (request, response) => { 
    response.sendFile(path.join(__dirname, "dist", "index.html"));
});

App.listen(3001, () => { 
    console.log(`Server running on port 3001`);
})