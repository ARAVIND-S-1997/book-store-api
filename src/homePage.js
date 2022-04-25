// other imports
import { useEffect, useState } from "react"
import { Display } from "./display"
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios"

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
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

// import { useParams } from "react-router-dom";




// Variable where the token and email is 
export const authtoken = localStorage.getItem("token")
export const authemail = localStorage.getItem("emailid")
console.log(authtoken, authemail);

// Application programming interface url
export const apiUrl = "http://localhost:8000";

export function Bookslist() {
    const [Books, setBooks] = useState([]);
    console.log(Books);

    const [searchbooks, setsearchbooks] = useState([]);
    console.log(searchbooks)

    const history = useHistory();

    useEffect(() => {
        axios({ url: `${apiUrl}/books/allbooks`, method: "GET" })
            .then((response) => setBooks(response.data.Books));
    }, [])

    const search = () => {
        axios({ url: `${apiUrl}/${searchbooks}`, method: "get" })
            .then((response) => setBooks(response.data.book))
    }

    // useEffect(search, [searchbooks]);
    // const getbooks = () => {
    //     axios({ url: `${apiUrl}/allbooks`, method: "GET" })
    //         .then((response) => setBooks(response.data.Books));
    // }

    // const particularbook = (bookname) => {
    //   
    // }

    // useEffect(getbooks,[])

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

                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search "
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(event) => setsearchbooks(event.target.value)}
                        />
                        <IconButton onClick={() => search} type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        {/* <Button onClick={()=>search}></Button> */}
                    </Paper>

                    {/* <TextField onChange={(event)=>{(event.target.values),
    console.log(event)}}className="searchField" label="Search input" /> 
    <Button onClick={()=>search}></Button> */}





                    <Button onClick={() => { history.push(`/login`) }} className="appLogIN" color="error" variant="contained">
                        <AccountCircleRoundedIcon />
                        Login
                    </Button>
                </div> :
                //  content to be render after login
                <div className="appBar">
                    <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search "
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(event) => setsearchbooks(event.target.value)}
                        />
                        <IconButton onClick={() => search} type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        {/* <Button onClick={()=>search}></Button> */}
                    </Paper>

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
                            <Button onClick={history.push("/")}>Home</Button>
                            <h3>Browse by category</h3>
                            <Button onClick={() => history.push("/allbooks/Computer & Internet")}>Computer&Internet</Button>
                            <Button onClick={() => history.push("/allbooks/Comics")}>Graphic Novel</Button>
                            <Button onClick={() => history.push("/allbooks/Fantasy")}>Fantasy</Button>
                            <Button onClick={() => history.push("/allbooks/Romance")}>Romance</Button>
                            <Button onClick={() => history.push("/allbooks/Fiction")}>Fiction</Button>
                            <Button onClick={() => history.push("/allbooks/Poetry")}>Poetry</Button>
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



