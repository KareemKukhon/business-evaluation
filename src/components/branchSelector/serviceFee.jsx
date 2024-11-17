import { Avatar, Box, TextField, Typography } from '@mui/material'
import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function ServiceFee() {
  return (
    <Box display={'flex'} gap={2} justifyContent={'center'} p={3}>
        
        <Avatar >
            <ShoppingBagOutlinedIcon/>
        </Avatar>
        <Box textAlign={'left'}>
            <Typography >Additional Expenses</Typography>
            <Typography variant='caption' >Additional fee for expenses (e.g. if the mission requires purchasing a product or a meal..)</Typography>
            <TextField
                label="Enter expense amount"
                variant="outlined"
                type="number"
                fullWidth
                required
                sx={{mt:1}}
            ></TextField>
        </Box>
    </Box>
  )
}
