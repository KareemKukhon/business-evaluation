import { Box, Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import BusinessProfileCard from '../../components/accountSettingsComp/businessProfileCard'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { useNavigate } from 'react-router-dom';

export default function BusinessProfile() {

    const navigate = useNavigate();

const handleEditClick = () => {
  navigate('/edit-business-profile', {
    state: {
        businessName: 'Business Profile',
        businessCategory: 'Retail',
        businessDescription: 'Description of the business',
        website: 'https://example.com',
        facebook: 'https://facebook.com/example',
        instagram: 'https://instagram.com/example',
        linkedin: 'https://linkedin.com/example',
        x: 'https://twitter.com/example',
    },
  });
};
  return (
    <Box alignItems={'center'}
    width={'100%'}
    borderRadius={7} p={3} height={'80vh'} 
    bgcolor={'#f7f7f7'}boxShadow={3}
    border= "1px solid rgba(0, 0, 0, 0.1)">
        <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant='h2' fontSize={20} fontWeight={'bold'}>Profile Info</Typography>
            <Button 
            onClick={handleEditClick}
            sx={{width: 68, height: 32, bgcolor: "#2E8868", gap:1, fontSize: 12}} variant='contained'>
                <BorderColorOutlinedIcon/>
                Edit
            </Button>
        </Box>
        <Grid2 spacing={10} container rowSpacing={1} mt={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid2 size={6}>
            <BusinessProfileCard
            title={"Business Name"}
            body={"Business Profile"}
            icon={<BusinessOutlinedIcon/>}
            />
            </Grid2>
            <Grid2 size={6}>
            <BusinessProfileCard
            title={"Phone Number"}
            body={"Business Profile"}
            icon={<BusinessOutlinedIcon/>}
            />
            </Grid2>
            <Grid2 size={6}>
            <BusinessProfileCard
            title={"Business Category"}
            body={"Business Profile"}
            icon={<BusinessOutlinedIcon/>}
            />
            </Grid2>
            <Grid2 size={6}>
            <BusinessProfileCard
            title={"Business Website"}
            body={"Business Profile"}
            icon={<BusinessOutlinedIcon/>}
            />
            </Grid2>
        </Grid2>

        <Box my={3} textAlign={'left'} bgcolor={'white'} p={2} borderRadius={3} height={100}>
            <Typography>Business Description</Typography>
            <Typography variant='caption'>Badia</Typography>
        </Box>
        
        {/* add the same but for business category and website link */}
        {/* create one for business description make it look like textarea */}
        <Typography textAlign={'left'} fontSize={16} variant='h2'>
            Social Links
        </Typography>
        <Grid2 spacing={10} container rowSpacing={1} mt={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid2 size={6}>
            <BusinessProfileCard
            title={"X"}
            body={""}
            icon={<XIcon/>}
            />
            </Grid2>
            <Grid2 size={6}>
            <BusinessProfileCard
            title={"Facebook"}
            body={""}
            icon={<FacebookIcon sx={{color:'#337FFF'}} />}
            />
            </Grid2>
            <Grid2 size={6}>
            <BusinessProfileCard
            title={"LinkedIn"}
            body={""}
            icon={<LinkedInIcon sx={{color: '#006699'}}/>}
            />
            </Grid2>
            <Grid2 size={6}>
            <BusinessProfileCard
            title={"Instagram"}
            body={""}
            icon={<InstagramIcon sx={{color: '#8C3AAA'}}/>}
            />
            </Grid2>
        </Grid2>
        {/* add box for social media icons and links and title */}
    </Box>
  )
}
