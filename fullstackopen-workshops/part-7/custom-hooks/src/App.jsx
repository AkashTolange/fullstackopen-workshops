// import {useState} from 'react';
//our customhooks
import useCounter from './hooks/useCounter';

const App = () => {

  //DRY : don't repeat yourself

  const counter1 = useCounter(0);
  const counter2 = useCounter(0);
  return ( 
    <>
    <h5>first counter</h5>
    <div>
      <div>{counter1.value}</div>
      <button onClick={counter1.increase}>plus</button>
      <button onClick={counter1.decrease}>minus</button>
      <button onClick={counter1.zero}>zero</button>
    </div>
    <h5>second counter</h5>
    <div>
      <div>{counter2.value}</div>
      <button onClick={counter2.increase}>plus</button>
      <button onClick={counter2.decrease}>minus</button>
      <button onClick={counter2.zero}>zero</button>
    </div> 
    
    </>
  )
};

export default App;
