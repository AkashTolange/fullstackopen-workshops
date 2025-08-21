import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { createNote} from "../reducers/noteReducer.js";
import noteServices from '../services/notes';
const NoteForm = () => {

  //state rw useState and this is the advantage of using redux
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const addNote = (e) => {
    e.preventDefault();
    // console.dir(e.target);
    console.dir(e.target.myInput.value);
    const newNote = {
      content: e.target.myInput.value,
      important: true,
      // id: store.getState().length + 1,
      id: notes.length + 1,
    };
    //server mw ni raknu paryo ni jatha and baneko aauxa and then we will resolve the promise and show the result 
    noteServices.createNew(newNote).then((myNote) => { 
      dispatch(createNote(myNote));
    })
    e.target.myInput.value = ""; // clear the input field after adding a note
  };
  return (
    <form onSubmit={addNote}>
      <input name="myInput" />
      <button>Add Note</button>
    </form>
  );
};

export default NoteForm;
