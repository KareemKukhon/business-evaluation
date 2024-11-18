import React from 'react';
import { useLocation } from 'react-router-dom';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Typography, Box } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '400px',
};

export default function DisplayLocation() {
  const { state: location } = useLocation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDx9cQpGQzWKGUr_kUa1VleO3FRmTAlkrU', // Replace with your API Key
  });

  if (!isLoaded) return <Typography>Loading Map...</Typography>;

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Selected Location
      </Typography>
      {location ? (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={10}
          >
            {/* Marker for the selected location */}
            <Marker position={location} />
          </GoogleMap>
          <Typography mt={2}>
            Latitude: {location.lat.toFixed(5)}, Longitude: {location.lng.toFixed(5)}
          </Typography>
        </>
      ) : (
        <Typography>No location selected</Typography>
      )}
    </Box>
  );
}
