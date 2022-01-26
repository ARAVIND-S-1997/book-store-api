import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function ForgetPassword(){
    return(
        <div className='forgetPasswordContentContainer'>
            <h1 className="forgetPasswordTitle">Forget Password</h1>
            <TextField className="forgetPasswordfields" id="outlined-basic" label="Email Id" variant="outlined" />
            <Button className="forgetPasswordfields" variant="contained">Send</Button>
        </div>
    )};