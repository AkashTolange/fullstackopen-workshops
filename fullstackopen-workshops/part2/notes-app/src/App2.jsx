import { useEffect, useState } from "react";
import Note from "./components/Note";
import axios from "axios";

const App2 =() =>{

  //index.js bata aako data ho hae
//   const [notes, setNotes] = useState(props.notes);
  const [notes, setNotes] = useState([]);

  //filtering displayed ntoes example ok
  const [newNote, setNewNote] = useState("");

  //boolean state to 
  const [showAll, setShowAll] = useState(true);

  //use of useEffect hook
  useEffect(() => { 
    console.log("hello");
    //1. get data from backend server
    let myAxiosPromise = axios.get("http://localhost:3001/notes")    //promise vanne object return garxa hae 
    myAxiosPromise.then((myResult) => { 
        // debugger;
        console.log("returned promise");
        // console.dir(myResult);
        console.log(myResult.data);
        //2. put the data into notes state
        setNotes(myResult.data);
    })

    console.log(myAxiosPromise);

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
  // const notesToShow = notes.filter((note) => (showAll ? true: note.important));
  const handleSubmit =(event) =>{
    // console.log(event);
    event.preventDefault();
    let myNote = {
        content: newNote, 
        // id: notes.length + 1, // no need to create from now on
        important: Math.random() >0.5
    }
    //naya create garnw ko lage
    let postPromise =axios.post("http://localhost:3001/notes", myNote);
    postPromise.then((result) =>{
        console.log("note created data", result.data);
        setNotes(notes.concat(result.data));
        // setNotes(notes.concat(newNote)); but now it will be 
        setNewNote("");
    });

    console.log("form has been submitted");
    alert("form has been submitted");
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

export default App2;

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