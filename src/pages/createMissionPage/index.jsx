import React, { Component } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Button, Select, MenuItem, TextField, AccordionActions, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusinessIcon from '@mui/icons-material/Business';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BranchSelector from '../../components/branchSelector';
import SideNavBar from '../../components/sideNavBar';

export default class CreateMissionPage extends Component {
  
  render() {
    return (
      <Box display={'flex'}>
        <SideNavBar />
        <Box width={'100%'} sx={{ padding: '1rem', display:'flex' }}>
        <BranchSelector/>
      </Box>
      </Box>
      
    );
  }
}
