import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './style.css'

export default function Goal_Report() {
  return (
    <Box textAlign="center" px={{ xs: 2, sm: 4, md: 6 }} py={{ xs: 4, sm: 6, md: 8 }}>
        <Typography
        color='#0B0C0D'
        fontSize={{ xs: 32, sm: 36, md: 48 }}
        fontWeight={"bold"}
        variant='h2'
        >Our reports are your solution 
        </Typography>
        <Typography
        color='#0B0C0D'
        fontSize={{ xs: 16, sm: 18, md: 20 }}
        fontWeight={"bold"}
        mt={2}
        >
        Set your goal & choose your report 
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent={"space-evenly"} alignItems={"end"} gap={4} mt={5}>
            <Box className="powerBi" >
                <Typography className='typography' color={"white"} fontSize={{ xs: 24, sm: 28, md: 32 }} variant="h2" fontWeight={"bold"}>Power BI</Typography>
                <Button variant='contained' color="white" sx={{
              backgroundColor: '#42726F',
              '&:hover': {
                backgroundColor: '#3B625C',
              },
              mt: 4,
            }} >Learn more</Button>
            </Box>
            <Box className="executiveSummary" >
                <Typography className='typography' color={"white"} fontSize={{ xs: 24, sm: 28, md: 32 }} variant="h2" fontWeight={"bold"} >Executive Summary</Typography>
                <Button variant='contained' color="white" sx={{
              backgroundColor: '#42726F',
              '&:hover': {
                backgroundColor: '#3B625C',
              },
              mt: 4,
            }}  >Learn more</Button>
            </Box>
            <Box className="singleReport" >
                <Typography className='typography' color={"white"} fontSize={{ xs: 24, sm: 28, md: 32 }} variant="h2" fontWeight={"bold"} >
                    Single Report</Typography>
                <Button variant='contained' color="white" sx={{
              backgroundColor: '#42726F',
              '&:hover': {
                backgroundColor: '#3B625C',
              },
              mt: 4,
            }}  >Learn more</Button>
            </Box>
        </Box>
    </Box>
  )
}
