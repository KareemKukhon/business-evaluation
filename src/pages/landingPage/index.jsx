import { Box } from '@mui/material'
import React, { Component } from 'react'
import CustomAppBar from '../../components/header'
import Hero from '../../sections/Hero/hero'
import OurStatisc from '../../sections/ourStatiscs'
import Pricing from '../../sections/pricing'
import Slideshow from '../../sections/howCanHelp'
import ImageCarousel from '../../sections/howCanHelp'
import AutoSlider from '../../sections/howCanHelp'
import HowCanHelp from '../../sections/howCanHelp'
import Goal_Report from '../../sections/goal&report'
import Testimonials from '../../sections/testimonials'

export default class LandingPage extends Component {
  render() {
    return (
        <Box>
           <CustomAppBar/>
      <Box display={"flex"} flexDirection={"column"} justifySelf={"center"}>
        
        <Hero></Hero>
        <OurStatisc></OurStatisc>
        <br />
        <Pricing/>
        {/* <HowCanHelp
        ></HowCanHelp> */}
        <Goal_Report></Goal_Report>
        <Testimonials></Testimonials>
      </Box> 
        </Box>
    
    )
  }
}
