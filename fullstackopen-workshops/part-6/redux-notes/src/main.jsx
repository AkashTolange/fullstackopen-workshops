import { StrictMode } from 'react'
// import './index.css'
// import App from './App.jsx'
// import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'
import { createStore } from "redux";

const noteReducer = (state = 100, action) => {
  console.log("action is : ", action);
  console.log("state is :",state);
  if ( action.type === "ADD"){ 
    const newState = state + 1;
    return newState;
  }
  return state;
}

const store = createStore(noteReducer);

const App =() => { 
  // const [counter, setCounter] = useState(0);

  const addCounter =() => {
    // setCounter((count) => count + 1);
    store.dispatch({type: "ADD"})
  }
  const subtractCounter =() => { 
    // setCounter((count) => count - 1);
    store.dispatch({type: "SUBTRACT"})
  }
  const makeZero =() => { 
    // setCounter(0);
    store.dispatch({type: "ZERO"})
  }
  return (<h1>hello</h1>)
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
store.subscribe(() => { 
    root.render(<App/>)
});

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
