import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

export function ForgetPassword() {
    return (<div>
        <div className="appBar">
            <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
            <TextField className="searchField" label="Search input" />
        </div>
        <div className='forgetPasswordContentContainer'>
            <Card>
                <CardContent>
                    <div className='forgetPasswordContent'>
                        <h1 className="forgetPasswordTitle">Forget Password</h1>
                        <TextField className="forgetPasswordfields" id="outlined-basic" label="Email Id" variant="outlined" />
                        <Button className="forgetPasswordfields" variant="contained">Send</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
    )
};