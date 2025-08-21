// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { createNote, toggleImportanceOf } from "./reducers/noteReducer";
// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
// import { filterChange } from './reducers/filterReducer';
import VisibilityFilter from './components/VisibilityFilter';
import services from './services/notes'
import { useSelector, useDispatch } from 'react-redux';
import { createNote } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => { 
      services.getAll().then((res) => { 
        dispatch(createNote(res))
      });
  }, []);


  return (
    <div>      
      <VisibilityFilter/>
      <NoteForm />
      <Notes/>
    </div>
  );
};


export default App