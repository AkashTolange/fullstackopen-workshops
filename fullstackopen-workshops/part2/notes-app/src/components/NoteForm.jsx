import { useState } from "react";

//onSubmit is a function that will be called when the form is submitted
//it will be passed the new note object

const NoteForm = ({ onSubmit }) => {
  const [newNote, setNewNote] = useState("");

  const mySubmit = (event) => {
    event.preventDefault();
    onSubmit({ 
      content: newNote,
      important:  Math.random() < 0.5,
    });

    setNewNote("");
  }
  return (
    <div>
      <h2>Create a new note</h2>

      <form onSubmit={mySubmit}>
        {/* <input /> */}
        <input
          className="someThing"
          placeholder="enter something here"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          id= "inputNote"
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}
export default NoteForm;