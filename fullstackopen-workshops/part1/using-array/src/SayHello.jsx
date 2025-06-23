// import React from 'react';

// //let's destructure props ok 
// let SayHello = ({person: {firstName, lastName, id}}) =>{
//     // return React.createElement('h1', { id: 'myId'}, `Hello ${props.firstName}`);
//      //destructuring nested object ok 
//     return (
//         <h1 id='myId'>Hello my name is {firstName} {lastName} and id is {id}.</h1>
//     );
// };

// export default SayHello;

import React from 'react';

//let's destructure props ok 
let SayHello = ({person, emptyarray}) =>{
    // return React.createElement('h1', { id: 'myId'}, `Hello ${props.firstName}`);
     //destructuring nested object ok 

    // const getFullName =() =>{
    //    return `${person.firstName} ${person.lastName} ${person.id}`;
    // }
    const getFullName =() => `${person.firstName} ${person.lastName} ${person.id}`;
     
    return (
        <div>
        <h1 id='myId'>Hello my name is {person.firstName} {person.lastName} and id is {person.id}.</h1>
        <h1 id='myId'></h1>
        <h5>
            Hello {getFullName()}
        </h5>
        </div>
    );
};

export default SayHello;