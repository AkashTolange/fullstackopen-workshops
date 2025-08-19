import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { createNote, toggleImportanceOf } from "./reducers/noteReducer";
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';


const App = () => {

  const [filter, setFilter] = useState("ALL");

  const filterSelected =(filter) => { 
    console.log("clicked radio is", filter);
    setFilter(filter);
  }


  return (
    <div>
      {/* copy paste from fullstackopen */}
      {/* div vitra teen ota radio button rakhe ko xu */}
      {/* what's the difference between radio button and check box  */}
      <div>
        all
        <input 
          type='radio'
          name='filter'
          onChange={() => filterSelected("ALL")}
        />
        important
        <input 
          type='radio'
          // it all depends on value of filter 
          name='filter'
          onChange={() => filterSelected("IMPORTANT")}
        />
        nonimportant
        <input
          type='radio'
          name='filter'
          onChange={() => filterSelected("NONIMPORTANT")} 
        
        />

      </div>
      <NoteForm />
      <Notes filter={filter}/>
    </div>
  );
};


export default App