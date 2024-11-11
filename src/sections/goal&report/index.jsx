import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import './style.css';

export default function Goal_Report() {
  return (
    <Box
      className="goal-report-box"
      textAlign="center"
      px={{ xs: 2, sm: 4, md: 6 }}
      py={{ xs: 4, sm: 6, md: 8 }}
      sx={
        {
          borderRadius: '30px', // Adds rounded corners
          overflow: 'hidden', // Ensures child elements don't overflow
          background: 'linear-gradient(135deg, #f2f2f2 50%, #ff8f06e4 50%)',
        }
      }
    >
      <Typography
        color="#0B0C0D"
        fontSize={{ xs: 32, sm: 36, md: 48 }}
        fontWeight="bold"
        variant="h2"
        sx={{
          animation: 'fadeInUp 1s ease-out',
        }}
      >
        Our reports are your solution
      </Typography>
      <Typography
        color="#0B0C0D"
        fontSize={{ xs: 16, sm: 18, md: 20 }}
        fontWeight="bold"
        mt={2}
        sx={{
          animation: 'fadeInUp 1.2s ease-out',
        }}
      >
        Set your goal & choose your report
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems="end"
        gap={4}
        mt={5}
      >
        <Box className="powerBi">
          <Typography
            className="typography"
            color="white"
            fontSize={{ xs: 24, sm: 28, md: 32 }}
            variant="h2"
            fontWeight="bold"
            sx={{
              animation: 'fadeInUp 1.4s ease-out',
            }}
          >
            Power BI
          </Typography>
          <Button
            variant="contained"
            color="white"
            sx={{
              backgroundColor: '#42726F',
              '&:hover': {
                backgroundColor: '#3B625C',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
              },
              mt: 4,
              animation: 'fadeInUp 1.6s ease-out',
            }}
          >
            Learn more
          </Button>
        </Box>
        <Box className="executiveSummary">
          <Typography
            className="typography"
            color="white"
            fontSize={{ xs: 24, sm: 28, md: 32 }}
            variant="h2"
            fontWeight="bold"
            sx={{
              animation: 'fadeInUp 1.4s ease-out',
            }}
          >
            Executive Summary
          </Typography>
          <Button
            variant="contained"
            color="white"
            sx={{
              backgroundColor: '#42726F',
              '&:hover': {
                backgroundColor: '#3B625C',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
              },
              mt: 4,
              animation: 'fadeInUp 1.6s ease-out',
            }}
          >
            Learn more
          </Button>
        </Box>
        <Box className="singleReport">
          <Typography
            className="typography"
            color="white"
            fontSize={{ xs: 24, sm: 28, md: 32 }}
            variant="h2"
            fontWeight="bold"
            sx={{
              animation: 'fadeInUp 1.4s ease-out',
            }}
          >
            Single Report
          </Typography>
          <Button
            variant="contained"
            color="white"
            sx={{
              backgroundColor: '#42726F',
              '&:hover': {
                backgroundColor: '#3B625C',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s',
              },
              mt: 4,
              animation: 'fadeInUp 1.6s ease-out',
            }}
          >
            Learn more
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
