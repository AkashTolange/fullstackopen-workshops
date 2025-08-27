import noteReducer from "./src/reducers/noteReducer";
import filterReducer from "./src/reducers/filterReducer";

import { configureStore } from "@reduxjs/toolkit";


//using configureStore we do not need of createStore and combineReducers too 
export const store = configureStore({ 
  reducer: { 
    notes: noteReducer,
    filter: filterReducer,
  }
})

