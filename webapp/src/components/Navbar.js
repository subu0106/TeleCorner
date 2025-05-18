import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import OrdersIcon from '@mui/icons-material/ShoppingCart';
import ChatIcon from '@mui/icons-material/Chat';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Button from '@mui/material/Button';

const Navbar = ({ darkMode, onToggleTheme }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#0d9488' }}>
        <Toolbar>
          <Button color="inherit" sx={{ fontWeight: 'bold', letterSpacing: 1, fontSize: '1.2rem', mr: 'auto' }}>
            Telecorner
          </Button>
          <Tooltip title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            <IconButton color="inherit" onClick={onToggleTheme}>
              {darkMode ? <WbSunnyIcon /> : <NightlightIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Orders">
            <IconButton color="inherit" sx={{ ml: 2 }}>
              <OrdersIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Chat">
            <IconButton color="inherit" sx={{ ml: 1 }}>
              <ChatIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton color="inherit" sx={{ ml: 1 }}>
              <ProfileIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
