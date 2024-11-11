import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, Grid2, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PricingCard from '../../components/priceCard/pricingCard';

export default function Pricing() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box textAlign="center" backgroundColor ="#F7F7F7" py={10}>
            <Typography variant='h2' fontSize="16" fontWeight="bold" mb={5}>
                Choose a package that fits your needs.
            </Typography>

            <Box
    sx={{
        maxWidth: { xs: 400, sm: 1000 },
        bgcolor: 'background.paper',
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',   // Center vertically
        justifyContent: 'center', // Center horizontally
        margin: '0 auto', // This ensures the Box is centered horizontally within its parent container
        padding: 2, // Optional: adds some padding for better visual spacing
    }}
>
    <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        sx={{
            '& .MuiTab-root': {
                color: '#333333',
                transition: 'background-color 0.3s',
                borderRadius: "30px",
                '&:hover': {
                    backgroundColor: '#333333',
                    color: 'white',
                },
            },
            '& .Mui-selected': {
                backgroundColor: '#FFD7AC',
                color: '#222222',
                borderRadius: "20px"
            },
            '& .MuiTabs-indicator': {
                display: 'none',
            },
        }}
    >
        <Tab label="Mystery Shopping" />
        <Tab label="Market Research" />
        <Tab label="Online Survey/Call Center" />
        <Tab label="Data Collection" />
        <Tab label="Inspection" />
    </Tabs>
</Box>
<br />
<Box
      backgroundColor="#EEF3F3"
      py={{ xs: 1, sm: 2, md: 3 }}
      px={{ xs: 2, sm: 4, md: 5 }}
      borderRadius={2}
      width={{ xs: '90%', sm: '80%', md: '1120px' }}
      textAlign="left"
      justifySelf="center"
      mx="auto" // Centers the box horizontally
    >
      <Typography
        variant="h3"
        color="#0B0C0D"
        fontSize={{ xs: 18, sm: 20, md: 24 }}
      >
        Packages
      </Typography>
      <Typography
        fontSize={{ xs: 12, sm: 13, md: 14 }}
        color="#0B0C0D"
      >
        Plans that suit perfectly to get started
      </Typography>
    </Box>
            <Box mx={20}>
                <Grid2  my={4} py={2} container spacing={6} justifyContent={"center"} backgroundColor="white" >
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <PricingCard 
                    title={"Intro"} 
                    price={900} 
                    setupAddons={"500"} 
                    operationAddons={"75"} 
                    powerBiAddons={"250"} 
                    items={["3 Missions", "Unit Price 300 SAR", "Package expires within 3 months of purchase"]} 
                />
            </Grid2>
            <Divider width ="100" flexItem sx={{ height: 'auto' }} orientation='vertical' ></Divider>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <PricingCard 
                    title={"Intro"} 
                    price={900} 
                    setupAddons={500} 
                    operationAddons={75} 
                    powerBiAddons={250} 
                    items={["3 Missions", "Unit Price 300 SAR", "Package expires within 3 months of purchase"]} 
                />
            </Grid2>
            <Divider width ="100" flexItem sx={{ height: 'auto' }} orientation='vertical' ></Divider>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <PricingCard 
                    title={"Intro"} 
                    price={900} 
                    setupAddons={500} 
                    operationAddons={75} 
                    powerBiAddons={250} 
                    items={["3 Missions", "Unit Price 300 SAR", "Package expires within 3 months of purchase"]} 
                />
            </Grid2>
            <Divider width ="100" flexItem sx={{ height: 'auto' }} orientation='vertical' ></Divider>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <PricingCard 
                    title={"Intro"} 
                    price={900} 
                    setupAddons={500} 
                    operationAddons={75} 
                    powerBiAddons={250} 
                    items={["3 Missions", "Unit Price 300 SAR", "Package expires within 3 months of purchase"]} 
                />
            </Grid2>
        </Grid2></Box>
        </Box>
    );
}
