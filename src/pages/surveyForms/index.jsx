import React, { Component } from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Drawer,
} from '@mui/material';
import { useNavigate} from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import SideNavBar from '../../components/sideNavBar';

class SurveyForms extends Component {
  // Dummy data for demonstration
  state = {
    forms: [
      { id: 1, name: 'Customer Satisfaction', category: 'Feedback', createdAt: '2024-11-01' },
      { id: 2, name: 'Market Research', category: 'Research', createdAt: '2024-11-05' },
    ],
  };

  handleAddAction = (id) => {
    console.log(`Add action triggered for form ID: ${id}`);
    // Add your logic here
  };
  handleAddClick = () => {
    this.props.navigate('/add-form'); // Use navigate from props
  };
  render() {
    const { forms } = this.state;

    return (
      
      <Box display={'flex'}>
        <SideNavBar/>
        <Box m={3} width={'100%'}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <h2>Survey Form</h2>
          <Button 
          onClick={this.handleAddClick}
          sx={{bgcolor:'#2E8868'}}  variant="contained" startIcon={<AddCircleOutlineOutlinedIcon />}>
            Add New Form
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Form Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Add</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forms.map((form) => (
                <TableRow key={form.id}>
                  <TableCell>{form.id}</TableCell>
                  <TableCell>{form.name}</TableCell>
                  <TableCell>{form.category}</TableCell>
                  <TableCell>{form.createdAt}</TableCell>
                  <TableCell>
                    <IconButton
                      variant="outlined"
                      color="primary"
                      onClick={() => this.handleAddAction(form.id)}
                    >
                      <EditNoteOutlinedIcon/>
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      onClick={() => this.handleAddAction(form.id)}
                    >
                      <VisibilityOutlinedIcon/>
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      sx={{color: "#2E8868"}}
                      onClick={() => this.handleAddAction(form.id)}
                    >
                      <DescriptionOutlinedIcon/>
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      color="error"
                      onClick={() => this.handleAddAction(form.id)}
                    >
                      <DeleteOutlinedIcon/>
                    </IconButton>
                    
                    <IconButton
                      variant="outlined"
                      sx={{color: "#ff9f43"}}
                      onClick={() => this.handleAddAction(form.id)}
                    >
                      <FileCopyOutlinedIcon/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </Box>
      
    );
  }
}

function addHookTo(Component) {
  function CompWithHook(props) {
      const navigate = useNavigate();
      return <Component {...props} navigate={navigate} />;
  }

  return CompWithHook;
}
export default addHookTo(SurveyForms);