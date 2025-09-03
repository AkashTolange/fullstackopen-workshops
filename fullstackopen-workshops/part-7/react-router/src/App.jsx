import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notes from "./Notes";
import Note from "./Note";

const notes =[
  {
    content: 'the app state is in redux store',
    important: true,
    id: 1,
  },
  { 
    content: 'state changes are made with actions',
    important: false,
    id: 2,
  },
  {
    content: 'one more',
    important: true,
    id: 3,
  }
]


//home
const Home = () => {
  return ( 
  <div>
    <h2>TKTL notes app</h2>
  </div>
  )
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
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
      </div>

      <Routes>
        <Route path="/notes" element={<Notes notes={notes}/>} />
        {/* need to build another Note componenet haha */}
        <Route path="/notes/:id" element={<Note notes={notes}/>}/>

        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2024</i>
      </div>
    </Router>
  );
};

export default App;
