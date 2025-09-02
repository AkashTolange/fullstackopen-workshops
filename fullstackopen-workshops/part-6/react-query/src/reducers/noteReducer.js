import { createSlice } from '@reduxjs/toolkit'
import noteServices from '../services/notes';

const noteReducer = createSlice({ 
    name: "notes",
    initialState: [],
    reducers: { 
      createNote(state, action) { 
          const  newState =state.concat(action.payload);
          return newState;
      },
      toggleImportanceOf(state, action){ 
        let myNote = state.find((note) => note.id === action.payload);
        let changedNote = { ...myNote, important: !myNote.important };
        // changedNote.important = !changedNote.important;
        return state.map(note=> note.id===changedNote.id ? changedNote : note)
      }
    }
})


const { createNote, toggleImportanceOf } = noteReducer.actions;
//

const makeNote =(newNote) => {
  return async (dispatch) => {            //backend mw naya data create garyo ane yo (dispatch) mw disptach aauxa ,,,,, redux store mw ni dispatch gardyo 
    const myNote = await noteServices.createNew(newNote);
    dispatch(createNote(myNote));
  }
 }



export { createNote, toggleImportanceOf, makeNote};


export default noteReducer.reducer;
