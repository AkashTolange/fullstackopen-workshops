import { useState } from "react";
import Display from "./Display";
import MyButton from "./MyButton";


const App =() =>{
  let [counter, setCounter] = useState(1);

  // setTimeout(()=> {
  //     setCounter(counter + 1);
  //     console.log(counter);
  //   }, 1000);
    
  // setCounter(100);
  //setTimeout le ekchote matra garxa

  //
  const increaseByOne =() =>{
    setCounter(counter + 1);
  }

  return (
    <>
      <Display counter={counter}/>
      {/* <button onClick={()=> setCounter(counter + 1)}>plus one </button> */}
      {/* <button onClick={increaseByOne}>plus one </button> */}
      <MyButton increaseFunc={increaseByOne} text={"increasing by one "}/>
    </>
  );
}

export default App;