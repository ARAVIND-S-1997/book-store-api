
// material ui imports

// import TextField from '@mui/material/TextField';
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
import Button from '@mui/material/Button';


import { useState } from 'react';
import { authtoken } from './homePage';
import { useHistory } from 'react-router-dom';

export function Navbar(){

    const history=useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
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
                       
                    />
                    <IconButton  type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    {/* <Button onClick={()=>search}></Button> */}
                </Paper>
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
                       
                    />
                    <IconButton  type="submit" sx={{ p: '10px' }} aria-label="search">
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
                <Button onClick={()=>history.push("/cart")} color="error" variant="contained">Cart</Button>

            </div>}
            
            </div>
    )
}