import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function SignUp(){
    return(
        <div className="SignUPContentContainer">
            <h1 className="signUpTitle">Sign Up</h1>
            <TextField className="signUpfields" id="outlined-basic" label="Username" variant="outlined" />
            <TextField className="signUpfields" id="outlined-basic" label="Email Id" variant="outlined" />
            <TextField className="signUpfields" id="outlined-basic" label="Date of Birth" variant="outlined" />
            <TextField className="signUpfields" id="outlined-basic" label="Password" variant="outlined" />
            <TextField className="signUpfields" id="outlined-basic" label="ConFirm Password" variant="outlined" />
            <Button className="signUpfields" variant="contained">Sign Up</Button>
            <p className='note'>Note:Enter the Date of Birth in DD/MM/YYYY format </p>
        </div>
    )
}
