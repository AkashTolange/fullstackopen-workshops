import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { createNote} from "../reducers/noteReducer.js";
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
    dispatch(createNote(newNote));
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
