import { useEffect, useState } from "react"
import { Display } from "./display"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import  axios  from "axios"

// Material ui import statements
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';



// Variable where the token and email is 
export const authtoken = localStorage.getItem("token")
export const authemail = localStorage.getItem("emailid")
console.log(authtoken, authemail);

// Application programming interface url
export const apiUrl = "http://localhost:9000/books";

export function Bookslist() {
    const [Books, setBooks] = useState([]);
    console.log(Books)
    const history = useHistory();
    // const [searchbooks, setsearchbooks] = useState([]);
    // const history = useHistory()
    const getAllBookData = () => {
        const auth = {
            token: authtoken
        }

        axios({ url: `${apiUrl}/allbooks`, method: "GET", headers: auth })
            .then((response) => setBooks(response.data.getBooksData));
    }
    useEffect(getAllBookData, [])

    // Material ui codes for dropdown menu in homepage
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {(!authtoken) ?
                // content to render before login
                <div className="appBar">
                    <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                    <TextField className="searchField" label="Search input" />
                    <Button onClick={() => { history.push(`/login`) }} className="appLogIN" color="error" variant="contained">
                        <AccountCircleRoundedIcon />
                        Login
                    </Button>
                </div> :
                //  content to be render after login
                <div className="appBar">
                    <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                    <TextField className="searchField" label="Search input" />

                    {/* The below codes are material ui codes */}
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem>
                            <Avatar /> Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>

                </div>}

            <div className="twocontainers">
                <div className="left">
                    <Card >
                        <CardContent className="leftCardContents" >
                            <h3>Browse by category</h3>
                            <Link to="/allbooks/Computer & Internet">Computer&Internet</Link>
                            <Link to="/allbooks/Comics">Graphic Novel</Link>
                            <Link to="/allbooks/Fantasy">Fantasy</Link>
                            <Link to="/allbooks/Romance">Romance</Link>
                            <Link to="/allbooks/Fiction">Fiction</Link>
                            <Link to="/allbooks/Poetry">Poetry</Link>
                        </CardContent>
                    </Card>
                </div>
                <div className="right">
                    {Books.map(({ _id,
                        PublicationDate,
                        Genre,
                        BookName,
                        Author,
                        Description,
                        Language,
                        Publisher,
                        Price,
                        Imageurl,
                        Available,
                        Rating }, i) => <Display
                            key={i}
                            id={_id}
                            published={PublicationDate}
                            genre={Genre}
                            author={Author}
                            description={Description}
                            bookname={BookName}
                            poster={Imageurl}
                            language={Language}
                            available={Available}
                            price={Price}
                            publisher={Publisher}
                            rating={Rating} />)}
                </div>
            </div>

        </div>
    )
}



