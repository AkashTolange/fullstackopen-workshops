import { useNavigate } from "react-router-dom";
//use of bootstrap
// import {Form, Button} from "react-bootstrap"

//materail ui 
import { TextField, Button } from "@mui/material";
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
                <TextField label="username"/>
            </div>
            <div>
                <TextField label="password" type="password" />
            </div>
            <div>
                <Button variant="contained" color="primary" type="submit">
                    login
                </Button>
            </div>
        </form>

        </>
    )
}

export default Login;

