import Button from '@mui/material/Button';

export function Welcome(){
    return(
        <div className="welcomeContainer">
            <p className="welcomeContent">Message:Welcome,you have successfully logged in </p>
            <Button className="logoutfields" variant="contained">Logout</Button>
        </div>
    )
}