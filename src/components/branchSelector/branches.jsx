// Branches.js
import React from 'react';
import { Box, Select, MenuItem, Button, Typography, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Branches({ branches, onUpdate }) {
  const handleBranchChange = (index, event) => {
    const updatedBranches = [...branches];
    updatedBranches[index].branch = event.target.value;
    onUpdate(updatedBranches);
  };

  const handleDateChange = (index, newDate) => {
    const updatedBranches = [...branches];
    updatedBranches[index].date = newDate;
    onUpdate(updatedBranches);
  };

  const handleAddBranch = () => {
    onUpdate([...branches, { branch: '', date: null }]);
  };

  const handleDeleteBranch = (index) => {
    const updatedBranches = branches.filter((_, i) => i !== index);
    onUpdate(updatedBranches);
  };

  return (
    <Box>
      {branches.map((branch, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Select
            value={branch.branch}
            onChange={(e) => handleBranchChange(index, e)}
            displayEmpty
            fullWidth
            sx={{ mb: 1 }}
          >
            <MenuItem value="" disabled>Select a branch</MenuItem>
            <MenuItem value="branch1">Branch 1</MenuItem>
            <MenuItem value="branch2">Branch 2</MenuItem>
            <MenuItem value="branch3">Branch 3</MenuItem>
          </Select>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={branch.date}
              onChange={(date) => handleDateChange(index, date)}
              renderInput={(props) => <TextField {...props} fullWidth />}
            />
          </LocalizationProvider>

          {branches.length > 1 && (
            <Button variant="contained" color="error" onClick={() => handleDeleteBranch(index)} sx={{ mt: 1 }}>
              <DeleteIcon />
            </Button>
          )}
        </Box>
      ))}

      <Button variant="contained" onClick={handleAddBranch} startIcon={<AddCircleOutlineIcon />}>
        Add Another Branch
      </Button>
    </Box>
  );
}
