import React from 'react';
import { Typography, Box } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Readings({ value, body }) {
  // Set up intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it only animates once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <Box ref={ref} display="flex" flexDirection="column" alignItems="center">
      <Typography fontWeight={"bold"} fontSize={"50"} color='#0B0C0D' variant='h3'>
        {inView ? (
          <CountUp end={parseInt(value.replace(/\D/g, ''))} duration={2} separator="," suffix="+" />
        ) : (
          "0" // Placeholder number when out of view
        )}
      </Typography>
      <Typography color="#0B0C0D" fontSize="16">
        {body}
      </Typography>
    </Box>
  );
}
