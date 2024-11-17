import { Box } from '@mui/material';
import { Component } from 'react';
import SideNavBar from '../../components/sideNavBar'

export default class HomePage extends Component {
  render() {
    return (
      <Box>
        <SideNavBar />
        {/* <CreateMissionButton/> */}
      </Box>
    );
  }
}
