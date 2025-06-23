import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import App1 from './App1.jsx';
// import App2 from './App2.jsx';
// import App3 from './App3';
// import App4 from './App4';
import Appstyle from './Appstyle';
import "./index.css";


// let notes = [
//   {id: 1, content: "note 1", important: true},
//   {id: 2, content: "note 2", important: false},
//   {id: 3, content: "note 3", important: true},
// ]


const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<Appstyle notes={notes}/>);
root.render(<Appstyle />);
