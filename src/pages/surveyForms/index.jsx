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
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import SideNavBar from '../../components/sideNavBar';
import CreateForm from './createForm';

export default class SurveyForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [
        { id: 1, name: 'Customer Satisfaction', category: 'Feedback', createdAt: '2024-11-01' },
        { id: 2, name: 'Market Research', category: 'Research', createdAt: '2024-11-05' },
      ],
      flag: false, // Initialize flag for toggling
    };
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handleBackButton); // Add listener for back button
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handleBackButton); // Remove listener on unmount
  }

  handleBackButton = () => {
    this.setState((prevState) => ({ flag: !prevState.flag })); // Toggle the flag
  };

  handleAddForm = () => {
    this.setState({ flag: true });
    window.history.pushState(null, '', window.location.href); // Add history entry
  };

  render() {
    const { forms, flag } = this.state;

    return (
      <Box display={'flex'}>
        <SideNavBar isActive={true} />
        {flag ? (
          <CreateForm />
        ) : (
          <Box m={3} width={'100%'}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <h2>Survey Form</h2>
              <Button
                onClick={this.handleAddForm}
                sx={{ bgcolor: '#2E8868' }}
                variant="contained"
                startIcon={<AddCircleOutlineOutlinedIcon />}
              >
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
                    <TableCell>Actions</TableCell>
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
                        <IconButton onClick={() => this.handleAddAction(form.id)}>
                          <EditNoteOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={() => this.handleAddAction(form.id)}>
                          <VisibilityOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#2E8868' }} onClick={() => this.handleAddAction(form.id)}>
                          <DescriptionOutlinedIcon />
                        </IconButton>
                        <IconButton color="error" onClick={() => this.handleAddAction(form.id)}>
                          <DeleteOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#ff9f43' }} onClick={() => this.handleAddAction(form.id)}>
                          <FileCopyOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    );
  }
}
