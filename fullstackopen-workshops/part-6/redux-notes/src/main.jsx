// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import noteReducer from "./reducers/noteReducer";
//reduxstore
const store = createStore(noteReducer);
// //store.dispatch()
// store.dispatch({
//   type:'NEW_NOTE',
//   payload: {
//     content: 'the app state is in redux store',
//     important: true,
//     id: 1
//   }
// })

const App = () => {

  const createNote =(newNote) => {
    return {
      type: "NEW_NOTE",
      payload: newNote,
    };
  };


  const addNote = (e) => {
    e.preventDefault();
    // console.dir(e.target);
    console.dir(e.target.myInput.value);
    const newNote = { 
      content: e.target.myInput.value,
      important: true,
      id: store.getState().length + 1,
    }
    store.dispatch(createNote(newNote));
  };

  const toggleImportanceOf =(id) => { 
    return  { 
      type: "TOGGLE_IMPORTANCE",
      payload: id,  
    };
  }

  const toggleImportant = (id) => {
    // e.preventDefault();
    store.dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="myInput" />
        <button type="submit">Add note</button>
      </form>
      <ul>
        {store.getState().map((note) => (
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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
store.subscribe(() => {
  root.render(<App />);
});

store.dispatch({
  type: "NEW_NOTE",
  payload: {
    content: "state changes are reflected in the UI",
    important: false,
    id: 1,
  },
});

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
