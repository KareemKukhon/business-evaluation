import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { Component } from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import userAvatar from '../../assets/profile-placeholder.jpg'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default class ProfileInfo extends Component {
  render() {
    return (
      <Box alignItems={'center'} width={'50%'} 
      borderRadius={7} p={3} height={'80vh'} 
      bgcolor={'#f7f7f7'}boxShadow={3}
      border= "1px solid rgba(0, 0, 0, 0.1)">
        <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant='h2' fontSize={20} fontWeight={'bold'}>Profile Info</Typography>
            <Button sx={{width: 68, height: 32, bgcolor: "#2E8868", gap:1, fontSize: 12}} variant='contained'>
                <BorderColorOutlinedIcon/>
                Edit
            </Button>
        </Box>
        <Box >
           <Avatar sx={{width: 160, height: 160, justifySelf:'center'}}>
                <img
                    alt="User Avatar"
                    src= {userAvatar}
                    style={{ width: '100%', height: '100%' }}
                />
            </Avatar> 
        </Box>
        
        <Typography my={2}>user name</Typography>
        <Typography my={2}>email</Typography>
        <Box display={'flex'} gap={2} textAlign={'left'} alignItems={'center'} bgcolor={"#EEF3F3"}>
            <LockOutlinedIcon/>
            <Box>
                <Typography>Password</Typography>
                <Typography variant='caption'>Click to change the password</Typography>
            </Box>
        </Box>
      </Box>
    )
  }
}
