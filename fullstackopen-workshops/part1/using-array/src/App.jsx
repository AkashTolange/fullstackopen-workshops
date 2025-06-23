import React from 'react';
import SayHello from './SayHello';



// let App = () => {
  
//     let peopleArray =[
//       {firstName: "Akash", lastName: "Tolange", id:7},
//       {firstName: "Dami", lastName: "Tamang", id:6},
//       {firstName: "Kiran", lastName: "Magar", id:5},
//       {firstName: "Aashish", lastName: "Limbu", id:4},
//     ]

//   if ( peopleArray.length >0){
//     return (
//         <div>
//           {/* jsx vitra javaScript leknw hame {curly brace use garxam hae hero} */}
//           {/* array lae component mw use gare pache key vanne property pass garnu parxa */}
//           {/* {peopleArray.map(value => <SayHello firstName={value.firstName} lastName={value.lastName} id={value.id} key={value.id}/>)} */}
//           {/* let's send entire object ok */}
//           {peopleArray.map(value => <SayHello person={value} key={value.id}/>)}

//           {/* suppose example of empty array ok  */}

//             {/* <h1>hello </h1>
//             <SayHello firstName={ peopleArray[0].firstName} lastName={peopleArray[0].lastName } id={peopleArray[0].id} />
//             <SayHello firstName={ peopleArray[1].firstName} lastName={peopleArray[1].lastName } id={peopleArray[1].id} />
//             <SayHello firstName={ peopleArray[2].firstName} lastName={peopleArray[2].lastName } id={peopleArray[2].id} />
//             <SayHello firstName={ peopleArray[3].firstName} lastName={peopleArray[3].lastName } id={peopleArray[3].id} /> */}
//         </div>
//     )
//   } 
//   return (
//     <h1>This is no data!</h1>
//   )
// }

// export default App;
//why default here , it's bcz
//allows a single export from a module to be easily imported without curly braces, 
//u can only have one default export per file.




//using ternary operator ok 
let App = () => {
  
  let peopleArray =[
    {firstName: "Akash", lastName: "Tolange", id:7},
    {firstName: "Dami", lastName: "Tamang", id:252},
    {firstName: "Kiran", lastName: "Magar", id:260},
    {firstName: "Aashish", lastName: "Limbu", id:200},
  ]


  return (
    <>
    {/*  use of ternary operator ok bro  */}
    {/* suppose example of empty array ok  */}
    {peopleArray.length >0 ? (
      <div>
        {peopleArray.filter(person => person.id > 250).map(value => <SayHello person={value} key={value.id}/>)}
        {/* also used filter ok  */}
      </div>) : (
        <h1>There is an empty data</h1>
      )}
      </>
  );
}

export default App;
//why default here , it's bcz
//allows a single export from a module to be easily imported without curly braces, 
//u can only have one default export per file.
