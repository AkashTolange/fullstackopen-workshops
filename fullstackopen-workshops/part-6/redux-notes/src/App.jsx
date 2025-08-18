import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createNote, toggleImportanceOf } from "./reducers/noteReducer";
import NoteForm from './components/NoteForm';


const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => { 
    return state;
  })
  const addNote = (e) => {
    e.preventDefault();
    // console.dir(e.target);
    console.dir(e.target.myInput.value);
    const newNote = { 
      content: e.target.myInput.value,
      important: true,
      // id: store.getState().length + 1,
      id: notes.length + 1,

    }
    dispatch(createNote(newNote));
    e.target.myInput.value=""; // clear the input field after adding a note
  };

 

  const toggleImportant = (id) => {
    // e.preventDefault();
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      {/* <form onSubmit={addNote}>
        <input name="myInput" />
        <button type="submit">Add note</button>
      </form> */}
      <NoteForm addNote={addNote}/>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => {toggleImportant(note.id)}}>
            {note.content}{" "}
            <strong >
              {note.important ? "important" : ""}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default App