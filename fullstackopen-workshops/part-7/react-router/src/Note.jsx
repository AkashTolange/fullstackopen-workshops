// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Note =( { note} ) => { 
    
    // const id = useParams().id;
    // const note =notes.find(note => note.id == id);

    return ( 
        <>
            {/* <h2>this is singel note for {id}</h2> */}
            <h2>this is singel note for {note.id}</h2>
                <li >
                    {note.content} <strong>{note.important ? 'important': ""}</strong>
                </li>
        </>
    )
}

export default Note;