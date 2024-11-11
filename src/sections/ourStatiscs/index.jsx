import { Box, Typography } from '@mui/material';
import React from 'react';
import Readings from '../../components/readings';

export default function OurStatistic() {
  return (
    <Box
      py={{ xs: 5, sm: 10 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      width="100%"
    >
      <Typography
        maxWidth="900px"
        px={2}
        fontWeight="bold"
        fontSize={{ xs: 30, sm: 40 }}
        variant="h2"
        color="#0B0C0D"
      >
        Data that Reflects Our Impact Across the Kingdom
      </Typography>

      <Typography
        maxWidth="700px"
        px={2}
        py={3}
        fontSize={{ xs: 14, sm: 16 }}
        color="#393C3F"
      >
        We use data to showcase our reach and effectiveness. Our clients' positive
        feedback and satisfaction with our service speak to our commitment to
        delivering exceptional results.
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={3}
        mt={3}
        width="100%"
        maxWidth="1200px"
      >
        <Readings value="12000" body="Businesses believe in our service" />
        <Readings value="8000" body="Satisfied Clients" />
        <Readings value="500" body="Mystery Shopping Projects" />
        <Readings value="24" body="Customer Support Available" />
      </Box>
    </Box>
  );
}
