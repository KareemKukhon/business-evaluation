import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HowCanHelp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <Box sx={{ maxWidth: '80%', mx: 'auto', py: 4 }}>
     
    <Slider {...settings}>
    <Box className="Background1">
          {/* Content of Background1 */}
        </Box>
        <Box className="Background1">
          {/* Content of Background1 */}
        </Box>
        
    </Slider>
    </Box>
  );
}
