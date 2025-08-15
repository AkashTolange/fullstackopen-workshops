// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from "redux";
import noteReducer from './reducers/noteReducer';
//reduxstore
const store = createStore(noteReducer);
//store.dispatch()
store.dispatch({ 
  type:'NEW_NOTE',
  payload: { 
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

const App =() => { 
  return( 
    <div>
      <ul>
        {store.getState().map(note=> 
          <li key={note.id}>
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        )}
      </ul>
    </div>
  )  
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
store.subscribe(() => { 
    root.render(<App/>)
});

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
