import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className="loginContentContainer">
            <h1 className="loginTitle">Login</h1>
            <TextField className="loginfields" id="outlined-basic" label="Email Id" variant="outlined" />
            <TextField className="loginfields" id="outlined-basic" label="Password" variant="outlined" />
            <Button className="loginfields" variant="contained">login</Button>
            <Link to="/forgetpassword">Forget password</Link>
            <Link to="/signup">Sign Up</Link>
            
        </div>
    )
}