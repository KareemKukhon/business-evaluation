import { Box, Typography } from '@mui/material'
import React from 'react'

export default function BusinessProfileCard({title, body, icon}) {
  return (
    <Box textAlign={'left'} bgcolor={'white'} p={2} borderRadius={3}>
        <Typography>{title}</Typography>
        <Box display={'flex'} alignItems={'end'} gap={1}>
            {icon}
            <Typography variant='caption'>{body}</Typography>
        </Box>
    </Box>
  )
}
