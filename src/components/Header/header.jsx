import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { DriveFileMoveTwoTone } from '@mui/icons-material';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Functions to handle dropdown open/close
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div position="static" className="bg-white shadow-md">
      <Toolbar className="flex justify-between items-center">
        
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="https://xdayaan.sirv.com/Biographs.png" alt="Logo" className="h-10" /> {/* Your logo here */}
          
        </div>
        
        {/* Navigation Menu */}
        <div className="hidden md:flex space-x-8">
          <Button className="text-black font-medium">Home</Button>
          <Button className="text-black font-medium">About</Button>
          
          {/* Dropdown for Experiments */}
          <div>
            <Button
              className="text-black font-medium"
              onClick={handleClick}
              endIcon={<MenuIcon />}
            >
              Experiments
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Rodent Research Mission-1 (OSD-379)</MenuItem>
              <MenuItem onClick={handleClose}>Rodent Research-23 (OSD-665)</MenuItem>
            </Menu>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <IconButton color="inherit" edge="start" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Rodent Research Mission-1 (OSD-379)</MenuItem>
            <MenuItem onClick={handleClose}>Rodent Research-23 (OSD-665)</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </div>
  );
}
