// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";

import { configureStore } from "@reduxjs/toolkit";


import App from "./App";
import { Provider } from "react-redux"; 




//using configureStore we do not need of createStore and combineReducers too 
const store = configureStore({ 
  reducer: { 
    notes: noteReducer,
    filter: filterReducer,
  }
})

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


