import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


//from learning
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);

// let counter = 1;

// setInterval(()=>{
//   counter = counter + 1;
//   console.log(counter);
//   root.render(<App counter={counter}/>);
// }, 1000);
