import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StoreIcon from '@mui/icons-material/Store';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SideNavBar() {
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update active item based on the current path
    const currentPath = location.pathname.replace('/', '').toLowerCase(); // Remove leading slash
    setActiveItem(currentPath || 'Home'); // Default to 'Home' if path is empty
  }, [location]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    navigate(`/${item.toLowerCase().replace(' ', '-')}`);
  };

  const navItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Create Mission', icon: <CreateIcon /> },
    { text: 'Survey Forms', icon: <FormatListBulletedIcon /> },
    { text: 'Orders', icon: <ShoppingCartIcon /> },
    { text: 'Packages', icon: <LocalOfferIcon /> },
    { text: 'Branches', icon: <StoreIcon /> },
    { text: 'Wallet', icon: <AccountBalanceWalletIcon /> },
  ];

  const accountItems = [
    { text: 'Account Settings', icon: <SettingsIcon /> },
    { text: 'Logout', icon: <ExitToAppIcon /> },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        height: '95vh',
        width: '250px',
        flexDirection: 'column',
        padding: '1rem',
        bgcolor: 'grey.100',
      }}
    >
      {/* User Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 7, mt: 2 }}>
        <Avatar sx={{ mr: 2 }}>U</Avatar>
        <Typography variant="h6">Username</Typography>
      </Box>

      {/* Navigation Tabs */}
      <List>
        {navItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleItemClick(item.text)}
            sx={{
              bgcolor: activeItem === item.text.toLowerCase().replace(' ', '-') ? '#ff8d06' : 'inherit',
              color: activeItem === item.text.toLowerCase().replace(' ', '-') ? '#fff' : 'inherit',
              borderRadius: 2,
              cursor: 'pointer',
              my: 0.3,
              '&:hover': {
                bgcolor: '#ff8d06',
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: activeItem === item.text.toLowerCase().replace(' ', '-') ? '#fff' : 'inherit',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Account Settings */}
      <List>
        {accountItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleItemClick(item.text)}
            sx={{
              bgcolor: activeItem === item.text.toLowerCase().replace(' ', '-') ? '#ff8d06' : 'inherit',
              color: activeItem === item.text.toLowerCase().replace(' ', '-') ? '#fff' : 'inherit',
              borderRadius: 2,
              my: 0.3,
              cursor: 'pointer',
              '&:hover': {
                bgcolor: '#ff8d06',
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: activeItem === item.text.toLowerCase().replace(' ', '-') ? '#fff' : 'inherit',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
