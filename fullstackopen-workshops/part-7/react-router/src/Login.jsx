import { useNavigate } from "react-router-dom";
//use of bootstrap
import {Form, Button} from "react-bootstrap"
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
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>username:</Form.Label> <Form.Control type="text" name="username"/><br/>
                <Form.Label>password:</Form.Label> <Form.Control type="password" name="password"/><br/>
                {/* <Button>Login</Button> */}
                <Button variant="primary" type="submit">
                    submit
                </Button>
            </Form.Group>
        </Form>

        </>
    )
}

export default Login;