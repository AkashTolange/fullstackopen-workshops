import {useState} from 'react';


const App = () => {

  //DRY : don't repeat yourself

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return ( 
    <>
    <h5>first counter</h5>
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
      <button onClick={() => setCounter(counter - 1)}>minus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
    <h5>second counter</h5>
    <div>
      <div>{counter2}</div>
      <button onClick={() => setCounter2(counter2 + 1)}>plus</button>
      <button onClick={() => setCounter2(counter2 - 1)}>minus</button>
      <button onClick={() => setCounter2(0)}>zero</button>
    </div>
    
    </>
  )
};

export default App;
