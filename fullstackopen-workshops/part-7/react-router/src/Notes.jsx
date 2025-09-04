import { Link } from "react-router-dom";
//use of bootstrap
import {Table} from "react-bootstrap";
const Notes = ({ notes }) => {
  return (
    <Table striped>
    <body>
      {notes.map((note) => (
        <tr key={note.id}>
          <td>
            <Link to={`/notes/${note.id}`}>{note.content}</Link>
          </td>
          <td>
              <strong>{note.important ? "important" : ""}</strong>
          </td>
        </tr>
      ))}
      </body>
    </Table>
  );
};

export default Notes;
