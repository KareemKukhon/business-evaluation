import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Avatar } from '@mui/material';
import userAvatar from '../../assets/profile-placeholder.jpg'

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
    <Box sx={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <Typography variant="h5" mb={3}>
        Edit Personal Information
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
        <Avatar
          src={avatar}
          alt="User Avatar"
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Button variant="outlined" component="label">
          Upload Photo
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
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}
