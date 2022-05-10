
// material ui imports
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from '@mui/material/Button';



import { authtoken } from './homePage';
import { useHistory } from 'react-router-dom';

// nav bar component
export function Navbar() {

    const history = useHistory();

    return (
        <div>
            {(!authtoken) ?
                // content to render before login
                <div className="appBar">
                    <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                    <Button onClick={() => { history.push(`/login`) }} className="appLogIN" color="error" variant="contained">
                        <AccountCircleRoundedIcon />
                        Login
                    </Button>
                </div> :

                //  content to be render after login
                <div className="appBar">
                    <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                    <Button onClick={() => history.push("/cart")} color="error" variant="contained">Cart</Button>
                </div>}

        </div>
    )
}