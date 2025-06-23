


import React from 'react';
// import  ReactDOM  from 'react-dom';
import { createRoot } from "react-dom/client";

import App from './App';


// let container = document.getElementById('root');

// //yaha chae hame react le banako react component haru rakhxam ok 
// // let App  = React.createElement("h1", {id: "myId"}, "hello world" );

// let root = ReactDOM.createRoot(container);
// root.render(React.createElement("h1", { id: "myId"}, "hello world!"));

// //or 
// // root.render(App);


//question raised as 
//why didn't we just rakhe ko vaye hunthyo variable App or why did we make that variable function 
// you have just converted into component

//let's make another component
// let SayHello = (props) => {
//     return React.createElement('h1', { id: "myId"}, `Hello ${props.firstName}`);
// }

//so what is a component? 
//it's just function and tara yo func certain format mw xa vane like parameter mw props vanne hunhca ane tyo function le return garda khere react.createElement return gare rw ko xa vane that is just a react component right 
// let App = () => {
//     return (
//         React.createElement("div", {},          // yade createElement vitra yade html elem xa vane 3 ota argument natra component xa vane 2 ota argument ok
//             [      //aru react component pane pass garnw milxa 
//                 React.createElement(SayHello, { firstName: "Akash"}),
//                 React.createElement(SayHello, { firstName: "NiruDidi"}),
//                 React.createElement(SayHello, { firstName: "RaJHero"}),
//                 React.createElement(SayHello, { firstName: "Neema"})
//             ]
//         )
//     )
// }

//sabae yaaha batae start huncha yo line dekhe

let container = document.getElementById('root');
// let root  = ReactDOM.createRoot(container);
let root  = createRoot(container);

// root.render(React.createElement(App));
root.render(React.createElement(App)); //pahela vitra ko resolve huncha  and callback function 
