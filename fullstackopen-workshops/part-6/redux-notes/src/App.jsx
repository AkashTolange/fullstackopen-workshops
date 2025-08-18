import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { createNote, toggleImportanceOf } from "./reducers/noteReducer";
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';


const App = () => {
 
 
 

  return (
    <div>
      <NoteForm />
      <Notes/>
    </div>
  );
};


export default App