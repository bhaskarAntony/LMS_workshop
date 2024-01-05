import { Avatar, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { auth } from '../../Database/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import './style.css'
import logout from '../images/logout.gif'
import Dialog from '@mui/material/'.' from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Header() {
    const [user, setUser] = useState(false)
    const [userId, setUserId] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openmenu = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloser = () => {
      setAnchorEl(null);
    };
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setUser(true)
              setUserId(user.email)
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
              setUser(false)
            }
          });
         
    }, [])
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            alert("Signed out successfully")
            window.location.reload();
        }).catch((error) => {
        // An error happened.
        });
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-white p-3">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
     <input type="text" />
      <form class="d-flex gap-2 align-items-center">
        {
            user?(
              <>
        
               <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={openmenu ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openmenu ? 'true' : undefined}
          >
            <Avatar sx={{bgcolor: deepOrange[800], width: 32, height: 32 }}>{userId?userId[0].toUpperCase(): "U"}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
               <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openmenu}
        onClose={handleCloser}
        onClick={handleCloser}
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
            '&::before': {
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
        <MenuItem onClick={handleCloser}>
        <Avatar sx={{bgcolor: deepOrange[800], width: 32, height: 32 }}>{userId?userId[0].toUpperCase(): "U"}</Avatar> Profile
        </MenuItem>
        <MenuItem onClick={handleCloser}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloser}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleCloser}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
              </>
            ):(
               <a href='/signup'> <Button variant="contained" className='w-100'>create Account</Button></a>
            )
        }
      </form>
    </div>
  </div>
</nav>
<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Logout Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>i dont want logout</Button>
          <Button onClick={handleLogout} autoFocus>
            i want to logout
          </Button>
        </DialogActions>
      </Dialog>
    </header>
  )
}

export default Header
