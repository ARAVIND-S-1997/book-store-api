import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function Login() {
    return (
        <div >
            <div className="appBar">
                <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                <TextField className="searchField" label="Search input" />
            </div>
            <div className='loginContentContainer'>
                <Card>
                    <CardContent>
                        <div className='loginContent'>
                            <h3 className="loginTitle">Login</h3>
                            <TextField className="loginfields" id="outlined-basic" label="Email Id" variant="outlined" />
                            <TextField className="loginfields" id="outlined-basic" label="Password" variant="outlined" />
                            <Button className="loginfields" variant="contained">login</Button>
                            <Link to="/forgetpassword">Forget password</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}