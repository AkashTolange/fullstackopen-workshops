/* eslint-disable no-console */
//conosle.log in our terminal so not a good idea vayeko le 

const info =(...params) =>{
    if(process.env.NODE_ENV !== 'test') {
        // console.log("NODE_ENV is :", process.env.NODE_ENV);
        // console.log("params are :", params);
        // console.log("params are :", ...params);
        console.log(...params);
    }
}

module.exports ={
    info,
}