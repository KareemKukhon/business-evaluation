import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import SideNavBar from '../../components/sideNavBar';

export default function EditBusinessProfile() {
  const location = useLocation(); // Access state from navigation
  const navigate = useNavigate();
  const initialData = location.state || {}; // Default to empty object if state is undefined

  const [formData, setFormData] = useState({
    businessName: initialData.businessName || '',
    businessCategory: initialData.businessCategory || '',
    businessDescription: initialData.businessDescription || '',
    website: initialData.website || '',
    facebook: initialData.facebook || '',
    instagram: initialData.instagram || '',
    linkedin: initialData.linkedin || '',
    x: initialData.x || '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    console.log('Updated Data:', formData);
    // Navigate back after saving
    navigate('/');
  };

  return (
    <Box display={'flex'}
    >
      <SideNavBar titile={'Account Settings'}/>
     <Box
      width="100%"
      maxWidth="600px"
      mx="auto"
      p={3}
      bgcolor="#f7f7f7"
      borderRadius={7}
      boxShadow={3}
      border="1px solid rgba(0, 0, 0, 0.1)"
    >
      <Typography variant="h2" fontSize={24} fontWeight="bold" mb={2}>
        Edit Business Profile
      </Typography>

      {/* Business Name */}
      <TextField
        label="Business Name"
        value={formData.businessName}
        onChange={(e) => handleChange('businessName', e.target.value)}
        fullWidth
        margin="normal"
      />

      {/* Business Category */}
      <TextField
        label="Business Category"
        value={formData.businessCategory}
        onChange={(e) => handleChange('businessCategory', e.target.value)}
        fullWidth
        margin="normal"
      />

      {/* Business Description */}
      <TextField
        label="Business Description"
        value={formData.businessDescription}
        onChange={(e) => handleChange('businessDescription', e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />

      {/* Website Link */}
      <TextField
        label="Website Link"
        value={formData.website}
        onChange={(e) => handleChange('website', e.target.value)}
        fullWidth
        margin="normal"
      />

      {/* Social Links */}
      <Typography variant="h6" fontSize={18} fontWeight="bold" mt={3}>
        Social Links
      </Typography>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={6}>
          <TextField
            label="Facebook Link"
            value={formData.facebook}
            onChange={(e) => handleChange('facebook', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Instagram Link"
            value={formData.instagram}
            onChange={(e) => handleChange('instagram', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="LinkedIn Link"
            value={formData.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="X (Twitter) Link"
            value={formData.x}
            onChange={(e) => handleChange('x', e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>

      {/* Save Button */}
      <Button
        onClick={handleSave}
        variant="contained"
        sx={{ mt: 3, bgcolor: '#2E8868', width: '100%' }}
      >
        Save Changes
      </Button>
    </Box> 
    </Box>
    
  );
}
