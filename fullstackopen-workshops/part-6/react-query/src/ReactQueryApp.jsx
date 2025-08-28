//so just like using useEffect use gare axios chala ko jastae
//useEffect ko satta useQuery chalaune hae 


import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
// import axios from 'axios'

import {getNotes, createNote, updateNote} from './request';


const App =() =>  { 

  const queryClient = useQueryClient(); 

  // const notes =[]; instead of empty array and useQuery is like hook that takes object and 
  //query fnc lae j func pass garyyou, tyo func le return gareko data, notes key mw haldinw ne rahexa
  const result = useQuery({ 
    queryKey: ["notes"],
    queryFn: getNotes,
  });
  // const newNoteMutation = useMutation({ mutationFn: createNote })
  //yo post ko lage
  const newNoteMutation = useMutation({ 
    mutationFn: createNote,
    onSuccess: () => { 
      queryClient.invalidateQueries({ queryKey: ["notes"]});
    },
  })

  //version v4 rw v5 mw differenct huncha hae syntax different huncha

  //yo update ko lage and for toggle importance ko lage
  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
      onSuccess: () => { 
      queryClient.invalidateQueries({ queryKey: ["notes"]})
    },
  })


  const addNote = async(event) => { 
    event.preventDefault();
    const content = event.target.note.value;
    //for post we need to do 
    newNoteMutation.mutate({ content, important: true}) //this obj will be passed to createNote below 
    event.target.note.value ="";
    console.log(content);
  };
  
  const toggleImportance = (note) => { 
    console.log("toggle importance of ", note.id);
    const updatedNote = { ...note, important: !note.important };
    updateNoteMutation.mutate(updatedNote);
  };
  
  

  console.log(JSON.parse(JSON.stringify(result)));

  if(result.isLoading) { 
    return <div>loading data...</div>;
  }

  
  const notes = result.data || [];

  return ( 
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note"/>
        <button type="submit">add</button>
      </form>
      {notes.map(note => {
        return (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong>{note.important ? 'important' : ''}</strong>
        </li>
        )}
      )}
    </div>
  )
}

export default App