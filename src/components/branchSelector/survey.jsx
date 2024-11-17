import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  Button,
  InputLabel,
  FormControl,
  IconButton
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function SurveyDetails() {
  const [category, setCategory] = useState('');
  const [form, setForm] = useState('');
  const [surveyTitle, setSurveyTitle] = useState('');
  const [missionSummary, setMissionSummary] = useState('');
  const [orderNote, setOrderNote] = useState('');

  const categories = ['Category 1', 'Category 2', 'Category 3'];
  const forms = ['Form A', 'Form B', 'Form C'];
  const surveyTitles = ['Survey X', 'Survey Y', 'Survey Z'];

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {/* Dropdown for Category */}
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          {categories.map((cat, index) => (
            <MenuItem key={index} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Dropdown for Form with Preview Button */}
      <Box display="flex" alignItems="center" gap={2}>
        <FormControl fullWidth>
          <InputLabel>Form</InputLabel>
          <Select
            value={form}
            onChange={(e) => setForm(e.target.value)}
            label="Form"
          >
            {forms.map((formOption, index) => (
              <MenuItem key={index} value={formOption}>
                {formOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton color="primary">
          <VisibilityIcon />
        </IconButton>
      </Box>

      {/* Dropdown for Survey Title */}
      <FormControl fullWidth>
        <InputLabel>Survey Title</InputLabel>
        <Select
          value={surveyTitle}
          onChange={(e) => setSurveyTitle(e.target.value)}
          label="Survey Title"
        >
          {surveyTitles.map((title, index) => (
            <MenuItem key={index} value={title}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Textarea for Mission Summary */}
      <TextField
        label="Mission Summary"
        multiline
        rows={4}
        value={missionSummary}
        onChange={(e) => setMissionSummary(e.target.value)}
        inputProps={{ maxLength: 4000 }}
        helperText={`${missionSummary.length}/4000 characters`}
      />

      {/* Textarea for Order Note */}
      <TextField
        label="Order Note"
        multiline
        rows={4}
        value={orderNote}
        onChange={(e) => setOrderNote(e.target.value)}
        inputProps={{ maxLength: 4000 }}
        helperText={`${orderNote.length}/4000 characters`}
      />
    </Box>
  );
}
