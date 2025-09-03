import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => { 

    const navigate = useNavigate();

    const handleSubmit = (event) =>{ 
        event.preventDefault();
        console.log(event.target.username.value)
        setUser(event.target.username.value)
        navigate('/users');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <strong>username:</strong> <input type="text" name="username"/><br/>
            <strong>password:</strong> <input type="password" name="password"/><br/>
            <button>Login</button>
        </form>
    )
}

export default Login;