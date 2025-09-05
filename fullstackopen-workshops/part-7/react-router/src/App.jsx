import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useMatch,
} from "react-router-dom";
import Notes from "./Notes";
import Note from "./Note";
import { useState } from "react";
import Login from "./Login";
//use material ui
// import {Container} from "@mui/material"

//use bootstrap
// import { ALert } from "react-bootstrap";
// import { Nav, Navbar } from "react-bootstrap";
import { Container, Alert, Toolbar } from "@mui/material";
import {Button, AppBar, IconButton } from "@mui/material"

const notes = [
  {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
  {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
  {
    content: "one more",
    important: true,
    id: 3,
  },
];

//home
const Home = () => {
  return (
    <div>
      <h2>TKTL notes app</h2>
    </div>
  );
};

//notes
// const Notes = () => {
//   return(
//   <div>
//     <h2>Notes</h2>
//   </div>
//   );
// };

//users
const Users = () => {
  return (
    <div>
      <h2>Users</h2>
    </div>
  );
};
//
const App = () => {
  const [user, setUser] = useState(null);

  const match = useMatch("/notes/:id");
  const note = match ? notes.find((note) => note.id == match.params.id) : null;

  const padding = {
    padding: 5,
  };

  const footerStyle = { color: "blue", fontSize: "20px" };

  return (
    //use material ui, for component but material ui & react-bootstrap ..each component has to be imported separately...
    //container has to be imported separately
    <Container>
      <AppBar position="static">
  <Toolbar>
    
    <Button color="inherit" component={Link} to="/">
      home
    </Button>
    <Button color="inherit" component={Link} to="/notes">
      notes
    </Button>
    <Button color="inherit" component={Link} to="/users">
      users
    </Button>  
    {user
      ? <em>{user} logged in </em>
      : <Button color="inherit" component={Link} to="/login">
        login
      </Button>
    }               
  </Toolbar>
</AppBar>

      <Routes>
        <Route path="/notes" element={<Notes notes={notes} />} />
        {/* need to build another Note componenet haha */}
        <Route path="/notes/:id" element={<Note note={note} />} />

        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/users" //example navigating to a url
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i style={footerStyle}>Note app, Department of Computer Science 2024</i>
      </div>
    </Container>
  );
};

export default App;
