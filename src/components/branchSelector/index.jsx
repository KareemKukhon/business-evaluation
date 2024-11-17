import React, { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Divider,
  AccordionActions,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MysteryShopper from './mysteryShopper';
import Branches from './branches';
import SurveyDetails from './survey';
import ServiceFee from './serviceFee';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

export default function BranchSelector() {
  const [branches, setBranches] = useState([{ branch: '', date: null }]);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isMysteryShopperDisabled, setIsMysteryShopperDisabled] = useState(true);
  const [isSurveyDetailsDisabled, setIsSurveyDetailsDisabled] = useState(true);
  const [isServiceFeeDisabled, setIsServiceFeeDisabled] = useState(true);

  const handleBranchesUpdate = (updatedBranches) => {
    setBranches(updatedBranches);
    const allFieldsFilled = updatedBranches.every((b) => b.branch && b.date);
    setIsNextDisabled(!allFieldsFilled);
  };

  const handleEnableMysteryShopperNext = (enabled) => {
    setIsMysteryShopperDisabled(!enabled);
  };

  const resetMysteryShopper = () => setIsMysteryShopperDisabled(true);

  const handleSurveyDetailsChange = (isValid) => {
    setIsSurveyDetailsDisabled(!isValid);
  };

  const handleServiceFeeChange = (isValid) => {
    setIsServiceFeeDisabled(!isValid);
  };

  return (
    <Box width={'100%'}>
      {/* Branches Accordion */}
      <Accordion
        sx={{
          borderRadius: 2,
          mb: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <AccordionSummary
          sx={{ px: 2, py: 1 }}
          expandIcon={<ExpandMoreIcon />}
        >
          <StorefrontOutlinedIcon />
          <Typography ml={2}>Branches</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Branches branches={branches} onUpdate={handleBranchesUpdate} />
        </AccordionDetails>
        <AccordionActions>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleBranchesUpdate([{ branch: '', date: null }])}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isNextDisabled}
            style={{ backgroundColor: '#FF8D06' }}
          >
            Next
          </Button>
        </AccordionActions>
      </Accordion>

      {/* <Divider sx={{ my: 3 }} /> */}

      {/* Mystery Shopper Accordion */}
      <Accordion
        sx={{
          borderRadius: 2,
          mb: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <AccordionSummary
          sx={{ px: 2, py: 1 }}
          expandIcon={<ExpandMoreIcon />}
        >
          <AccountCircleOutlinedIcon />
          <Typography ml={2}>Mystery Shopper</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MysteryShopper onEnableNext={handleEnableMysteryShopperNext} />
        </AccordionDetails>
        <AccordionActions>
          <Button variant="outlined" color="error" onClick={resetMysteryShopper}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isMysteryShopperDisabled}
            style={{ backgroundColor: '#FF8D06' }}
          >
            Next
          </Button>
        </AccordionActions>
      </Accordion>

      {/* <Divider sx={{ my: 3 }} /> */}

      {/* Survey Details Accordion */}
      <Accordion
        sx={{
          borderRadius: 2,
          mb: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <AccordionSummary
          sx={{ px: 2, py: 1 }}
          expandIcon={<ExpandMoreIcon />}
        >
          <ContentPasteOutlinedIcon />
          <Typography ml={2}>Survey Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SurveyDetails onChange={handleSurveyDetailsChange} />
        </AccordionDetails>
        <AccordionActions>
          <Button variant="outlined" color="error" onClick={() => setIsSurveyDetailsDisabled(true)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isSurveyDetailsDisabled}
            style={{ backgroundColor: '#FF8D06' }}
          >
            Next
          </Button>
        </AccordionActions>
      </Accordion>

      {/* <Divider sx={{ my: 3 }} /> */}

      {/* Service Fee Accordion */}
      <Accordion
        sx={{
          borderRadius: 2,
          mb: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <AccordionSummary
          sx={{ px: 2, py: 1 }}
          expandIcon={<ExpandMoreIcon />}
        >
          <BusinessCenterOutlinedIcon />
          <Typography ml={2}>Service Fee</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ServiceFee onChange={handleServiceFeeChange} />
        </AccordionDetails>
        <AccordionActions>
          <Button variant="outlined" color="error" onClick={() => setIsServiceFeeDisabled(true)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={isServiceFeeDisabled}
            style={{ backgroundColor: '#FF8D06' }}
          >
            Next
          </Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
}
