// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import noteReducer from "./reducers/noteReducer";

import App from "./App";
import { Provider } from "react-redux"; 

//reduxstore
const store = createStore(noteReducer);

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


