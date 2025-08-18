import React from 'react'

const NoteForm = ({addNote}) => {
  return (
    <form onSubmit={addNote}>
        <input name="myInput"/>
        <button>Add Note</button>
    </form>
  )
}

export default NoteForm