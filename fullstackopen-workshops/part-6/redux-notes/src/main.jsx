// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
//yo redux mw vako ho hae createStore and combineReducers
import { combineReducers, createStore } from "redux";
import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

//let's learn if there are two reducer then how to combine them 
//combineReducer 

import App from "./App";
import { Provider } from "react-redux"; 


const reducer = combineReducers({ 
  notes: noteReducer,
  filter: filterReducer,
})


//reduxstore
const store = createStore(reducer);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // that means that the store is available to all components in the app
  // so we can use the store in any component
  <Provider store={store}>
    <App/>
  </Provider>
);
//not a good practice to subscribe like this, but for simplicity in this example


