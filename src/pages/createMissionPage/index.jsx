import React, { Component } from 'react';
import { Box, Typography, Button } from '@mui/material';
import SideNavBar from '../../components/sideNavBar';
import BranchSelector from '../../components/branchSelector';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

export default class CreateMissionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false, // Initialize the flag
    };
  }

  componentDidMount() {
    window.addEventListener('popstate', this.handleBackButton); // Listen for browser back button
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handleBackButton); // Clean up the listener
  }

  handleBackButton = () => {
    this.setState((prevState) => ({ flag: !prevState.flag })); // Toggle flag when back button is pressed
  };

  handleClick = () => {
    this.setState({ flag: true });
    window.history.pushState(null, '', window.location.href); // Add a history entry
  };

  render() {
    const { flag } = this.state;

    return (
      <Box display={'flex'}>
        <SideNavBar />
        {!flag ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100vh"
          >
            <Button
              onClick={this.handleClick}
              sx={{
                textAlign: 'left',
                padding: 0,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                border="1px solid #222"
                borderRadius={2}
                padding={2}
              >
                <NoteAddOutlinedIcon />
                <Box>
                  <Typography>Create new mission</Typography>
                  <Typography>Please add your mission details</Typography>
                </Box>
                <KeyboardArrowRightOutlinedIcon />
              </Box>
            </Button>
          </Box>
        ) : (
          <Box width={'100%'} sx={{ padding: '1rem', display: 'flex' }}>
            <BranchSelector />
          </Box>
        )}
      </Box>
    );
  }
}
