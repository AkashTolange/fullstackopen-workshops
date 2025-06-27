require("dotenv").config();

const url = process.env.MONGODB_URI
const PORT = process.env.PORT;

//need to export url ok 
module.exports ={
    // url: url
    url, 
    PORT
};