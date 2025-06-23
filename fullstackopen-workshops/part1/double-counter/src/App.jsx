import { useState } from "react";
import Display from "./Display";
import MyButton from "./MyButton";
import History from "./History";

//we just converted primitive type ko state into euta complex data structure me (object ko strucutre mw) 
const App =() =>{
  let initialState ={
    left: 0,
    right: 0
  }
  // let [left, setLeftCounter] = useState(1);
  // let [right, setRightCounter] = useState(1);
  //object
  let [clicks, setClicks] =useState(initialState);
  //array
  let [clickhistory, setHistory] = useState([]);
  //total clicks
  let [totalClicks, setTotal] = useState(0);



  const increaseByOneLeft =() =>{
    // let newState ={
    //   left: clicks.left + 1,
    //   //existing value tehe rakhnw 
    //   right: clicks.right
    // }
    let newLeft = clicks.left + 1;
    console.log(clicks);
    setClicks({ left: newLeft, right: clicks.right});
    console.log(clicks);
    // debugger;
    //concat
    setHistory(clickhistory.concat("L"));
    //spread operator too 
    setTotal( newLeft + clicks.right);
  }


  const increaseByOneRight =() =>{
    let newRight = clicks.right + 1;
    setClicks({ left: clicks.left, right: newRight});
    //this is wrong way below code , how can we take func length??
    // let newLength = setHistory.length + 1;
    //spread operator too
    const newHistory = [...clickhistory, "R"];
    setHistory(newHistory);
    //total

    setTotal(newHistory.length);
  }

  return (
    <>
      {clicks.left}
      <MyButton increaseFunc={increaseByOneLeft} text={"left by one  "}/>
      {clicks.right}
      <MyButton increaseFunc={increaseByOneRight} text={"right by one  "}/>
      {/* <div>Here Clicks History is :{clickhistory}</div> */}
      <History history ={clickhistory}/>
      <div>The total number of Clicks is:{totalClicks}</div>

    </>
  );
}

export default App;