import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';
import userAvatar from '../../assets/profile-placeholder.jpg'
import SideNavBar from '../../components/sideNavBar';

export default function EditPersonalProfile() {
  const [avatar, setAvatar] = useState(userAvatar);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Logic for saving changes
    console.log({ name, email, avatar });
  };

  const handleCancel = () => {
    // Logic for canceling changes
    console.log('Changes canceled');
  };

  return (
    <Box display={'flex'}>
        <SideNavBar titile={'Account Settings'}/>
        <Box sx={{ padding: '2rem', maxWidth: '500px', margin: 'auto',
            bgcolor:'#f7f7f7',
            boxShadow:3,
            border:"1px solid rgba(0, 0, 0, 0.1)" }}>
        <Typography variant="h5" mb={3}>
            Edit Personal Information
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            
            <Button component="label">
            <Avatar
            src={avatar}
            alt="User Avatar"
            sx={{ width: 100, height: 100, mb: 2 }}
            />
            <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleAvatarChange}
            />
            </Button>
        </Box>
        <Box mb={3}>
            <TextField
            label="Name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <TextField
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </Box>
        <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" color="error" onClick={handleCancel}>
            Cancel
            </Button>
            <Button variant="contained" sx={{bgcolor: '#ff8d06'}} onClick={handleSave}>
            Save Changes
            </Button>
        </Box>
        </Box> 
    </Box>
    
  );
}
