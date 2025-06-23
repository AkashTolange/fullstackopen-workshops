import React from 'react';
import SayHello from './SayHello';

//question why capital Name for component name
//jsx parser lae tyo tag lekhe pache html element hoke component hok k taha rw
//sayHello rakhuyo vane tag nae vann tahaxa ni
let App = () => {
    // return (
    //     React.createElement("div", {},          // yade createElement vitra yade html elem xa vane 3 ota argument natra component xa vane 2 ota argument ok
    //         [      //aru react component pane pass garnw milxa 
    //             React.createElement(SayHello, { firstName: "Akash"}),
    //             React.createElement(SayHello, { firstName: "NiruDidi"}),
    //             React.createElement(SayHello, { firstName: "RaJHero"}),
    //             React.createElement(SayHello, { firstName: "Neema"})
    //         ]
    //     )
    // )
    return (
        <div>
            <h1>hello </h1>
            <SayHello firstName ="Akash"/>
            <SayHello firstName ="NiruDidi"/>
            <SayHello firstName ="Neema"/>
        </div>
    )
}

export default App;
//why default here , it's bcz
//allows a single export from a module to be easily imported without curly braces, 
//u can only have one default export per file.