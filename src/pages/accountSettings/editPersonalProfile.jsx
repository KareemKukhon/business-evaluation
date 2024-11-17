import { Box, Typography } from '@mui/material'
import React from 'react'
import userAvatar from '../../assets/profile-placeholder.jpg'

export default function EditPersonalProfile() {
  return (
    <Box>
        <Typography>Edit Personal Information</Typography>
        <Box>
            {/* add here the userAvatar and make the user able to upload photo and replace it with this avatar  */}
            <Box>
                {/* add here two textfield for name and for email to edit it  */}
            </Box>
        </Box>
        <Box>
            {/* add two button one for cancel and one for save changes and but them in the right bottom corner  */}
        </Box>
    </Box>
  )
}
