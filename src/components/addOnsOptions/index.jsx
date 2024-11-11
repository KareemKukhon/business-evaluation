import { Box, Checkbox, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function AddOnsOption({ title, price, description, onToggle }) {
  const [checked, setChecked] = useState(false);  // Track the checkbox state

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    onToggle(event.target.checked);  // Notify parent component of checkbox change
  };

  return (
    <Box
      my={1}
      display="flex"
      alignItems="center"
      width={330}
      justifyContent="space-between"
      sx={{
        border: '1px dashed #ccc',  // Adds a light gray border
        borderRadius: '8px',        // Optional: Adds rounded corners
        padding: '8px',              // Optional: Adds some padding inside the box
      }}
    >
      <Box display="flex" justifyContent="end" alignItems="center">
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          sx={{
            color: "#e5e7eb",
            '&.Mui-checked': {
              color: '#2E8868',
            },
          }}
        />
        <Typography>{title}</Typography>
        <Tooltip title={description}>
          <InfoOutlinedIcon sx={{ fontSize: '20px', marginLeft: '5px' }} />
        </Tooltip>
      </Box>

      <Box display="flex">
        <Typography color='#2E8868' fontSize="12.5">
          SAR
        </Typography>
        <Typography color='#2E8868' fontSize="14.5" fontWeight={"bold"}>
          +{price}
        </Typography>
      </Box>
    </Box>
  );
}
