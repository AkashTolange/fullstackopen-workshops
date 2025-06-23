import { useEffect, useState } from "react";
import Note from "./components/Note";

const App =(props) =>{

  //index.js bata aako data ho hae
  const [notes, setNotes] = useState(props.notes);

  //filtering displayed ntoes example ok
  const [newNote, setNewNote] = useState("");

  //boolean state to 
  const [showAll, setShowAll] = useState(true);

  //use of useEffect hook
  useEffect(() => { 
    console.log("hello");
  }, []);

  
  // const notesToShow = notes.filter((noteshow)=>{
  //   // return !noteshow.important    //true matra vako euta subarray banauxa hae 
  //   if ( showAll) {
  //     return true;
  //   } else{
  //       if( noteshow.important === true){
  //         return true;
  //       } else {
  //         return false;
  //       }
  //   }
  // })
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  const handleSubmit =(event) =>{
    // console.log(event);
    event.preventDefault();
    console.log("form has been submitted");
    setNotes(notes.concat({content: newNote, id: notes.length + 1, important: Math.random() >0.9}));
    setNewNote("");
  }


  const handleChange =(event) =>{

    // console.dir("typing", event.target);
    // console.log("typing", event.target.value);

    setNewNote(event.target.value);
  }

  const handleShowAll =() =>{
    setShowAll(!showAll);
  }

  return (
    <>
      <h2>hello there Notes </h2>
      {/* <ul>
          <li>{props.notes[0].content}</li>
          <li>{props.notes[1].content}</li>
          <li>{props.notes[2].content}</li>
      </ul> */}
      <h1>Notes</h1>
      <button onClick={handleShowAll}> show {showAll ? "important" : "all"}</button>
      <ul>
          {notesToShow.map(value =>{                //value is now object and will run for each object in array ok
            return (
              // <li key={value.id}>{value.id} is an id of this content which makes this content :{value.content}</li>
              <Note key={value.id} note={value} />
            )
          })}
      </ul>        {/*//what is event and event.target look below */}

      <form onSubmit={handleSubmit}>
        {/* controlled component */}
        <input type="text" value={newNote} onChange={handleChange}/>
        {/* <input type="text"/> */}
        <button>Submit</button>

      </form>
    </>
  );
}

export default App;

// event is an object automatically passed to your function by React (or the browser) when an event like onChange, onClick, etc. happens.
// It contains information about what triggered the event, like which element it came from, current value, etc.

// event.target refers to the DOM element that triggered the event.
// In this case, it's the <input> element.
//console.log(event.target); // <input type="text" value="Hello" />


//what is event.target.value?
// event.target.value gives you the current value inside the input field.
//console.log(event.target.value); // "Hello"


//refactor nw garnu vanda aagade ko 
// const App =(props) =>{
//   const { notes } =props;
//   // console.log(props);
//   // console.log(props.notes);
//   return (
//     <>
//       <h2>hello there Notes </h2>
//       {/* <ul>
//           <li>{props.notes[0].content}</li>
//           <li>{props.notes[1].content}</li>
//           <li>{props.notes[2].content}</li>
//       </ul> */}
//       <ul>
//           {notes.map(value =>{                //value is now object and will run for each object in array ok
//             return (
//               <li key={value.id}>{value.id} is an id of this content which makes this content :{value.content}</li>
//             )
//           })}
//       </ul>
//     </>
//   );
// }

// export default App;