import { useNavigate } from "react-router-dom";
//use of bootstrap
// import {Form, Button} from "react-bootstrap"

//materail ui 
// import { TextField } from "@mui/material";
// import { Button } from "@mui/material";

//styled components
import { Button, Input} from "./components/Button"

const Login = ({setUser}) => { 

    const navigate = useNavigate();

    const handleSubmit = (event) =>{ 
        event.preventDefault();
        console.log(event.target.username.value)
        setUser(event.target.username.value)
        navigate('/users');
    }

    return ( 
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <Input label="username"/>
            </div>
            <div>
                <Input label="password" type="password" />
            </div>
            <div>
                <Button  type="submit">
                    login
                </Button>
            </div>
        </form>

        </>
    )
}

export default Login;

