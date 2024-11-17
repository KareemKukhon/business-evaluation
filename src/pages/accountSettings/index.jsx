import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { Component } from 'react'
import ProfileInfo from './profileInfo';
import BusinessProfile from './businessProfile';
import SideNavBar from '../../components/sideNavBar';

export default class AccountSettings extends Component {
  render() {
    return (
      <Box display="flex">
        {/* Sidebar */}
        <SideNavBar />
        
        {/* Main Content */}
        <Box display="flex" gap={2} p={5} flex={1}>
          <ProfileInfo />
          <BusinessProfile />
        </Box>
      </Box>
    )
  }
}
