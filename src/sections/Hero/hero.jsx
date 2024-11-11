import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function Hero() {
  return (
    <Box
      position="relative"
      backgroundColor="transparent"
      height="90vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Background SVG for Statistics */}
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          zIndex: -1,
        }}
      >
        {/* Example Stars */}
        <circle cx="100" cy="100" r="50" fill="#FF8D06" />
        <circle cx="200" cy="150" r="25" fill="#FF8D06" />
        <circle cx="300" cy="75" r="15" fill="#FF8D06" />
        {/* Rating Stars */}
        <polygon points="350,130 370,180 420,180 380,210 400,260 350,230 300,260 320,210 280,180 330,180" fill="#FF8D06" />
        {/* Graph Lines */}
        <path d="M50 500 L250 300 L450 350 L650 250" stroke="#3D3D3D" strokeWidth="2" />
        <path d="M100 550 L300 400 L500 450 L700 350" stroke="#3D3D3D" strokeWidth="2" />
      </Box>

      {/* Main Text Content */}
      <Box py={15} textAlign="center">
        <Typography fontSize={80} variant="h2" color="#3D3D3D" fontWeight="bold">
          Looking For a
        </Typography>
        <Typography fontSize={54} fontWeight="bold" variant="h4" color="#FF8D06">
          Mystery Shopper?
        </Typography>
      </Box>
      <Typography fontSize={20} pb={10}>
        For better customer Experience and Insights
      </Typography>
      <Button sx={{ backgroundColor: '#FF8D06', color: 'black' }} variant="contained">
        Order Now
      </Button>
    </Box>
  )
}
