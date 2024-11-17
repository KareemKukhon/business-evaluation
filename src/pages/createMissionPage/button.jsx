import { Box, Button, Typography } from '@mui/material'
import React, { Component } from 'react'
import SideNavBar from '../../components/sideNavBar'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Navigate, useNavigate } from 'react-router-dom';

class CreateMissionButton extends Component {
    // navigate = useNavigate();
    handleClick = () => {
        this.props.navigate('/add-mission')
    }
    render() {
        return (
            <Box display={'flex'}>
                <SideNavBar />
                <Box 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center" 
                    height="50vh" // Optional: adjust height if needed
                    p={3}
                >
                    <Button 
                        onClick={this.handleClick}
                        sx={{
                            display: 'inline-flex', 
                            width: 'auto', 
                            height: 'auto', 
                            textAlign: 'left', 
                            p: 0 
                        }}
                    >
                        <Box 
                            display={'flex'} 
                            alignItems={'center'} 
                            gap={1} 
                            textAlign={'left'} 
                            border={'1px solid #222'} 
                            borderRadius={2} 
                            p={2}
                        >
                            <NoteAddOutlinedIcon />
                            <Box>
                                <Typography>
                                    Create new mission
                                </Typography>
                                <Typography>
                                    Please add your mission details
                                </Typography>    
                            </Box>
                            <KeyboardArrowRightOutlinedIcon />
                        </Box>
                    </Button>
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
  export default addHookTo(CreateMissionButton);
