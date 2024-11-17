import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileInfo from './profileInfo';
import BusinessProfile from './businessProfile';
import SideNavBar from '../../components/sideNavBar';

export default function AccountSettings() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <Box display="flex">
      {isMobile && (
        <IconButton onClick={toggleDrawer} sx={{ position: 'absolute', top: 10, left: 10 }}>
          <MenuIcon />
        </IconButton>
      )}
      <SideNavBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={2}
        p={3}
        flex={1}
      >
        <ProfileInfo />
        <BusinessProfile />
      </Box>
    </Box>
  );
}
