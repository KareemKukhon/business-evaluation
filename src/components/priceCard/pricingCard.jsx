import { Box, Button, Checkbox, Divider, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddOnsOption from '../addOnsOptions';

export default function PricingCard({title, price, items, setupAddons, operationAddons, powerBiAddons, executiveSummary}) {
  const [totalPrice, setTotalPrice] = useState(price);  // Initial price of the card
  const [addons, setAddons] = useState({});
  const handleAddonChange = (addonName, isChecked, price) => {
    setAddons((prevAddons) => {
      const newAddons = { ...prevAddons, [addonName]: isChecked };
      // Update the total price
      let newTotal = totalPrice;
      if (isChecked) {
        newTotal += price;  // Add price to total if checked
      } else {
        newTotal -= price;  // Subtract price from total if unchecked
      }
      setTotalPrice(newTotal);  // Update the total price
      return newAddons;
    });
  };
  return (
    <Box>
      <Typography>{title}</Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <Typography>SAR</Typography>
        <Typography variant='h3'>{price}</Typography>
      </Box>
      <Divider />
      <br />
      <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
        {items.map((item, index) => (
          <Box display={"flex"} justifyContent={"center"} key={index}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              sx={{ color: 'green', fontSize: '0.8rem' }}
            >
              <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon>
            </svg>
            <Typography variant='body1' fontSize={"12"} color='#0B0C0D'>{item}</Typography>
          </Box>
        ))}
        <br />
      </Box>

      <Typography textAlign={"left"} color='#0B0C0D' fontSize={"16"}>
        Add-ons
      </Typography>
      <AddOnsOption
        title="Setup"
        price={500}
        description="Description of the add-on for the add-on system"
        onToggle={(isChecked) => handleAddonChange("Setup", isChecked, 500)}
      />
      <AddOnsOption
        title="Operation"
        price={75}
        description="Description of the add-on for the add-on system"
        onToggle={(isChecked) => handleAddonChange("Operation", isChecked, 75)}
      />
      <AddOnsOption
        title="Power Bi"
        price={250}
        description="dadsf akldsjf asdf asd fasf aslkdfjasf alskdfj"
        onToggle={(isChecked) => handleAddonChange("PowerBi", isChecked, 250)}
      />
      {/* Centered Total Price Box */}
      <Box
        display="flex"
        justifyContent="center" // Center horizontally
        alignItems="center"     // Center vertically
        sx={{
          width: 180,
          border: '2px dashed #ccc',  // Adds a light gray border
          borderRadius: '8px',        // Optional: Adds rounded corners
          padding: '8px', 
          margin: 'auto',              // Centers the box horizontally in its parent
        }}
      >
        <Typography color='black' fontSize={16}> 
          Total Price: 
        </Typography>
        <Typography variant='h3' color='black' fontSize={24}>
          {totalPrice}
        </Typography>
      </Box>

      <Button variant='contained' sx={{ my: 2, px: 8, py: 1.2, backgroundColor: "#FFFFFD", color: 'black' }}>
        Purchase Now
      </Button>
    </Box>
  );
}
