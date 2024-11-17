// MysteryShopper.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Divider } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function MysteryShopper({onEnableNext}) {
  const [genderSelected, setGenderSelected] = useState(null);
  const [languageSelected, setLanguageSelected] = useState(null);
  const [performerSelected, setPerformerSelected] = useState(null);
  const [assignmentSelected, setAssignmentSelected] = useState(null);
  const [locationCheckSelected, setLocationCheckSelected] = useState(null);
  const [id, setId] = useState('');
  useEffect(() => {
    // Enable the next button if all fields are completed
    if (
      genderSelected !== null &&
      languageSelected !== null &&
      assignmentSelected !== null &&
      locationCheckSelected !== null &&
      (performerSelected === 0 || (performerSelected === 1 && id))
    ) {
      onEnableNext(true);
    } else {
      {console.log(genderSelected, languageSelected, assignmentSelected, locationCheckSelected, performerSelected)}
      onEnableNext(false);
    }
  }, [genderSelected, languageSelected, performerSelected, id, locationCheckSelected, assignmentSelected,  onEnableNext]);

  const options = [
    { title: 'Open To All', subtitle: '' },
    { title: 'Specific mystery shopper', subtitle: 'Select a specific shopper by ID' }
  ];

  const selectionBoxStyle = (isSelected) => ({
    padding: '.7rem',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'background-color 0.3s',
    bgcolor: isSelected ? '#ffd7ac' : 'transparent',
    border: isSelected ? '1px solid #FF8D06' : '1px solid #DDD',
    color: isSelected ? '#FF8D06' : '#333',
    fontWeight: isSelected ? 'bold' : 'normal',
  });

  return (
    <Box>
      {/* Gender Selection */}
      <Box display="flex" flexDirection="column" gap={2} mt={3}>
        <Typography textAlign="left" variant="h4" fontSize={16}>Gender</Typography>
        <Box display="flex">
          {['Any', 'Female', 'Male'].map((option, index) => (
            <Box
              key={index}
              onClick={() => setGenderSelected(index)}
              sx={{ ...selectionBoxStyle(genderSelected === index), mr: 2 }}
            >
              <Typography>{option}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Language Selection */}
      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        <Typography textAlign="left" variant="h4" fontSize={16}>Language</Typography>
        <Box display="flex">
          {['Any', 'English', 'Arabic'].map((option, index) => (
            <Box
              key={index}
              onClick={() => setLanguageSelected(index)}
              sx={{ ...selectionBoxStyle(languageSelected === index), mr: 2 }}
            >
              <Typography>{option}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Performer Selection */}
      <Box display="flex" flexDirection="column" gap={2} mt={2}>
        <Typography textAlign="left" variant="h4" fontSize={16}>Select type of performer</Typography>
        {options.map((option, index) => (
          <Box
            key={index}
            onClick={() => setPerformerSelected(index)}
            sx={{ ...selectionBoxStyle(performerSelected === index), display: 'flex', alignItems: 'center', gap: 2 }}
          >
            <AccountCircleOutlinedIcon sx={{ color: performerSelected === index ? '#FF8D06' : '#aaa' }} />
            <Box display="flex" flexDirection="column">
              <Typography variant="subtitle1">{option.title}</Typography>
              <Typography variant="caption" color="text.secondary">{option.subtitle}</Typography>
              {performerSelected === 1 && index === 1 && (
                <TextField label="ID" variant="outlined" size="small" value={id} onChange={(e) => setId(e.target.value)} sx={{ mt: 1 }} />
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Settings Section */}
      <Typography variant="h4" fontSize={16} textAlign="left" my={2}>Settings</Typography>
      <Box border="1px solid #DDD" borderRadius={4} p={3} mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <PeopleOutlineRoundedIcon />
          <Box textAlign="left">
            <Typography variant="h4" fontSize={14}>Mission Assignment</Typography>
            <Typography variant="caption">
              Auto assign a mission to Muktashif when a merchant has not assigned one
            </Typography>
          </Box>
        </Box>
        <Box display="flex" gap={2} mt={2}>
          {['Auto', 'Manual'].map((option, index) => (
            <Box
              key={index}
              onClick={() => setAssignmentSelected(index)}
              sx={{ ...selectionBoxStyle(assignmentSelected === index), width: '100%' }}
            >
              <Typography>{option}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Location Check Section */}
      <Box border="1px solid #DDD" borderRadius={4} p={3} mb={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <FmdGoodOutlinedIcon />
          <Box textAlign="left">
            <Typography variant="h4" fontSize={14}>Location Check</Typography>
            <Typography variant="caption">
              Muktashif must visit the branch location to perform the survey.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" gap={2} mt={2}>
          {['Yes', 'No'].map((option, index) => (
            <Box
              key={index}
              onClick={() => setLocationCheckSelected(index)}
              sx={{ ...selectionBoxStyle(locationCheckSelected === index), width: '100%' }}
            >
              <Typography>{option}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
