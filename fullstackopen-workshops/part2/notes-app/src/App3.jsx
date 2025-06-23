import { useEffect, useState } from "react";
import Note from "./components/Note";
// import axios from "axios";

import noteService from "./services/notes";

const App3 =() =>{

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
    // let myAxiosPromise = axios.get("http://localhost:3001/notes")    //promise vanne object return garxa hae 
    let myAxiosPromise = noteService.getAll();    //promise vanne object return garxa hae 
    myAxiosPromise.then((myData) => { 
        // debugger;
        console.log("returned promise");
        // console.dir(myData);
        console.log(myData.data);
        //2. put the data into notes state
        setNotes(myData.data);
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
    // let postPromise =axios.post("http://localhost:3001/notes", myNote);
    let postPromise =noteService.create(myNote);
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

  //updateData ,and we need to know the unique id of that note ok 
  const updateData =(id) =>{
    //1. update the server
        let currentNote = notes.find((note) =>{
            return note.id === id;
        });
        let updatedNote ={...currentNote, important: !currentNote.important};
        // let putPromise =axios.put(`http://localhost:3001/notes/${id}`, updatedNote)
        let putPromise = noteService.update(id, updatedNote);
        putPromise.then((result) =>{ 
            console.dir(result);
            let updatedNote = result.data;
            //2. update the frontend/state
            setNotes(
                notes.map((note) => 
                    note.id === updatedNote.id ? updatedNote : note
            ));
        })
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
              <Note 
              key={value.id} 
              note={value} 
              updateNote={() =>{
                updateData(value.id);
             }} 
            />
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

export default App3;

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