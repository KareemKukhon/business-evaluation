import React from 'react';
import { Image } from "@mui/icons-material";
import { Box } from '@mui/material';

export default function Card ({ cardClass, imageWrapperClass, imageAlt, imageSrc, textWrapperClass, children, cover, ...rest }) {
  return (
    <Box 
    sx={
      {
        backgroundColor: "white",
        boxShadow: 1,
        border: "1px solid rgba(0, 0, 0, 0.1)",
        position: "relative",
        borderRadius: 2,
        padding: 2,
        height: { lg: 200, xs: 260 },
        marginBottom: { lg: 2, xs: 0 },
        width: "100%",
        display: "flex",
        gap: 2,
        justifyContent: "flex-start",
      }
    }
    {...rest}>
      <Image sx={{
        width: 80,
        height: 80,
        borderRadius: 50,
        position: "absolute",
        bottom: { lg: 16, xs: 12 },
        right: 30,
      }} alt={imageAlt} src={imageSrc} />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
      }}>
        {children}
      </Box>
    </Box>
  );
};

