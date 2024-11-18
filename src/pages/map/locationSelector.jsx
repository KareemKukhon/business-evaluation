import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 24.7136, // Default latitude (Riyadh)
  lng: 46.6753, // Default longitude (Riyadh)
};

export default function LocationSelector() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDx9cQpGQzWKGUr_kUa1VleO3FRmTAlkrU', // Replace with your API Key
  });

  const [selectedLocation, setSelectedLocation] = useState(center);
  const navigate = useNavigate();

  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const handleSaveLocation = () => {
    navigate('/display-location', { state: selectedLocation });
  };

  if (!isLoaded) return <Typography>Loading Map...</Typography>;

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Select Your Location
      </Typography>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation}
        zoom={10}
        onClick={handleMapClick}
      >
        {/* Marker for the selected location */}
        <Marker position={selectedLocation} />
      </GoogleMap>
      <Typography mt={2}>
        Selected Location: {selectedLocation.lat.toFixed(5)}, {selectedLocation.lng.toFixed(5)}
      </Typography>
      <Button
        onClick={handleSaveLocation}
        variant="contained"
        sx={{ mt: 2 }}
      >
        Save Location
      </Button>
    </Box>
  );
}
