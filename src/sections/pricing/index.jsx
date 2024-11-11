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
        <Box textAlign="center" backgroundColor="#F7F7F7" py={10} sx={{ overflowX: "hidden", position: 'relative' }}>
            
            {/* Curvy SVG Background */}
            <Box
                component="svg"
                viewBox="0 0 1440 320"
                sx={{
                    position: 'absolute',
                    top: 0,
                    
                    left: 0,
                    width: '100%',
                    height: '100%', // Adjust as needed for layout
                    zIndex: -1,
                    backgroundColor: 'transparent',
                }}
            >
                <path
                    fill="#f0f4f8"
                    d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,208C672,203,768,181,864,181.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
            </Box>

            {/* Main Content */}
            <Typography variant="h2" fontSize="16" fontWeight="bold" mb={5}>
                Choose a package that fits your needs.
            </Typography>

            <Box
                sx={{
                    maxWidth: { xs: 400, sm: 1000 },
                    bgcolor: 'background.paper',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    padding: 2,
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
                mx="auto"
            >
                <Typography variant="h3" color="#0B0C0D" fontSize={{ xs: 18, sm: 20, md: 24 }}>
                    Packages
                </Typography>
                <Typography fontSize={{ xs: 12, sm: 13, md: 14 }} color="#0B0C0D">
                    Plans that suit perfectly to get started
                </Typography>
            </Box>
            
            <Box mx={{ xs: 2, md: 10, }}>
                <Grid2 container spacing={6} justifyContent="center" my={4} py={2} >
                    {[...Array(4)].map((_, index) => (
                        <React.Fragment key={index}>
                            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                                <Box sx={{ borderRadius: '16px', boxShadow: 3, overflow: 'hidden', p: 2, background: 'linear-gradient(135deg, white 50%, #ff8f06e4 20%)' }}>
                                    <PricingCard 
                                        title="Intro" 
                                        price={900} 
                                        setupAddons="500" 
                                        operationAddons="75" 
                                        powerBiAddons="250" 
                                        items={["3 Missions", "Unit Price 300 SAR", "Package expires within 3 months of purchase"]} 
                                    />
                                </Box>
                            </Grid2>
                            {index < 3 && (
                                <Divider flexItem orientation="vertical" sx={{ height: 'auto', display: { xs: 'none', sm: 'block' } }} />
                            )}
                        </React.Fragment>
                    ))}
                </Grid2>
            </Box>
            
        </Box>
    );
}
