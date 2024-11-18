import { Box, Button, Typography } from '@mui/material';
import React, { Component } from 'react';
import SideNavBar from '../../components/sideNavBar';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useNavigate } from 'react-router-dom';

class CreateMissionButton extends Component {
    handleClick = () => {
        this.props.navigate('/add-mission');
    };

    render() {
        return (
            <Box display="flex">
                <SideNavBar title={'Create Mission'} />
                <Box 
                    display="flex" 
                    justifyContent="center" 
                    alignItems="center" 
                    width="100%" 
                    height="100vh" // Ensures full-page height
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
