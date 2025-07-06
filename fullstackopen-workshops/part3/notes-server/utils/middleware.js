
const { info } = require('./logger'); //importing info from logger


const requestLogger = (request, response, next) => {
 info('Method:', request.method) //logs every incoming request's method , path and 
 info('Path:  ', request.path)   // body for debugging or monitoring.
 info('Body:  ', request.body)
 info('---')
  // return response.json({message: "Helllo"})
  next()
  // console.log("after next");
}


const noHandlers =(request, response) =>{
    response.status(404).send("no code available to handle this request");
}

const errorHandler = (error, request, response, next) => {
  // console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  //mongoose schema validation and let's handle error ok
  if( error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

// this has to be the last loaded middleware, also all the routes should be registered before this!
// app.use(errorHandler);

module.exports = {
    errorHandler,
    noHandlers,
    requestLogger,
}