const Note = (props) => {
  const { note, updateNote } = props;
  // return (
  return (
    // <li>  id is {note.id}:{note.content}</li>
    <li>id is {note.id}:{note.content}{" "}
      <button onClick={updateNote}>
        change {note.important ? "true" : "false"}
      </button>
    </li>
  );
};

export default Note;
