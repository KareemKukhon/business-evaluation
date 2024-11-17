import { Box } from '@mui/material';
import { Component } from 'react';
import SideNavBar from '../../components/sideNavBar'
import CreateMissionButton from '../createMissionPage/button';

export default class HomePage extends Component {
  render() {
    return (
      <Box>
        <SideNavBar isActive={true}/>
        <CreateMissionButton/>
      </Box>
    );
  }
}
