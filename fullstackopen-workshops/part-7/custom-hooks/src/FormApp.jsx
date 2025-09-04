import { useState } from "react";

//let's use custom hook , we made ok 
//custom hook name useField
import useField from "./hooks/useField";


const FormApp =() =>{ 


    //use of custom hook
    const namec = useField('text');
    const bornc = useField('date');
    const heightc = useField('number');

    // const [name, setName] = useState("");
    // const [born, setBorn] = useState("");
    // const [height, setHeight] = useState("");

    return (
        <div>
            <form>
                name:
                <input 
                    // type={namec.type}
                    // value={namec.value}
                    // onChange={namec.onChange}
                    {...namec}
                />
                <br/>
                birthdate:
                <input
                    // type={bornc.type}
                    // value={bornc.value}
                    // onChange={bornc.onChange}
                    {...bornc}
                />
                <br/>
                height:
                <input
                    // type={heightc.type}
                    // value={heightc.value}
                    // onChange={heightc.onChange}
                    {...heightc}
                    />
                <br/>
                    {namec.value}{bornc.value}{heightc.value}
            </form>
        </div>
    )
}

export default FormApp;