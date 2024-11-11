import { useCallback, useRef } from "react";
import { Typography, Button, Box, CardActions, IconButton, CardContent, CardMedia, Collapse, Avatar, CardHeader } from "@mui/material";
import Slider from "react-slick";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProfileImg1 from "../../assets/profile1.jpeg";
import ProfileImg2 from "../../assets/profile2.jpeg";
import ProfileImg3 from "../../assets/profile3.jpeg";
import ProfileImg4 from "../../assets/profile4.jpeg";
import Card from "../../components/Card";
import { ExpandMore } from "@mui/icons-material";

export const TestimonialTexts = {
    firstText: "TESTIMONIALS",
    secondText: "What people say about Us.",
    feedBacks: [
        {
            text: "You did a fabulous job. There were no hitches. Thank you again for all your work planning this trip.",
            person: "Mike Taylor",
            location: "Lahore, Pakistan"
        },
        {
            text: "Jadoo was great with the entire process from planning to updates during the trip. We had 11 people and everything was perfectly executed. We appreciate all of her hard work. It was truly the trip of a lifetime. Thank you!",
            person: "Gina",
            location: "Owerri, Nigeria"
        },
        {
            text: "Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance before we left on what to bring and such, that was very helpful!",
            person: "Emma",
            location: "Vancouver, Canada"
        },
        {
            text: "Thank you for your recommendation and putting the trip together. The resort was absolutely beautiful. The infinity pools, the palm trees in the main pool, the infinity pool in our preferred area overlooking the gulf and the golf course were exceptional....",
            person: "Loveth",
            location: "Lagos, Nigeria"
        },
    ],
};

const Testimonials = () => {
    const sliderRef = useRef(null);

    // Function for next button
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    // Function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    };

    const renderProfileImg = useCallback((element) => {
        switch (element) {
            case 0:
                return ProfileImg2;
            case 1:
                return ProfileImg1;
            case 2:
                return ProfileImg3;
            case 3:
                return ProfileImg4;
            default:
                return "";
        }
    }, []);

    return (
        <Box sx={{ width: "100%", mt: 8, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 5 }}>
                {/* Text and Steps Container */}
                <Box sx={{ width: { xs: "100%", md: "40%" }, display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="body2" color="textSecondary" sx={{ letterSpacing: "0.1em" }}>
                    {TestimonialTexts.firstText}
                </Typography>
                <Typography variant="h4" color="textPrimary" sx={{ fontWeight: "medium", fontSize: { xs: "2rem", sm: "3rem", md: "5rem" } }}>
                    {TestimonialTexts.secondText}
                </Typography>
            </Box>
                {/* Testimonial Slides Container */}
                <Box sx={{  height: 400, width: "70%", display: "flex", justifyContent: "center", alignItems: "center", gap: 4 }}>
                    <Box sx={{ height: 250, width: "50%" }}>
                        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
                            {TestimonialTexts.feedBacks.map((feedBack, index) => (
                                <Box  key={index}>
                                   <Box textAlign="left" sx={{ maxWidth: { xs: '100%', sm: 420 } }}>
    <Typography fontSize={{ xs: 12, sm: 14 }} color="#152F37" mb={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic eum accusantium voluptate quibusdam deleniti.
    </Typography>
    <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        justifyContent="space-between"
        mt={2}
    >
        <Box mb={{ xs: 2, sm: 0 }} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography fontSize={{ xs: 14, sm: 16 }} fontWeight="bold" color="#152F37">
                Mike Taylor
            </Typography>
            <Typography fontSize={{ xs: 12, sm: 14 }} color="#152F37">
                Lahore, Pakistan
            </Typography>
        </Box>

        <Avatar 
            alt="Person" 
            src={renderProfileImg(index)} 
            sx={{ 
                width: { xs: 50, sm: 60 }, 
                height: { xs: 50, sm: 60 }, 
                backgroundColor: "rgba(0, 0, 0, 0.1)", 
                alignSelf: { xs: 'center', sm: 'flex-end' } 
            }} 
        />
    </Box>
</Box>

                                </Box>
                            ))}
                        </Slider>
                    </Box>
                    {/* Controllers */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, paddingBottom: 5 }}>
                        <Button onClick={previous} variant="contained" sx={{ backgroundColor: "#FF8D06", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" }, borderRadius: "50%"}}>
                            <KeyboardArrowUpIcon fontSize="small" />
                        </Button>
                        <Button onClick={next} variant="contained" sx={{ width:34, backgroundColor: "#FF8D06", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" }, borderRadius: "50%" }}>
                            <KeyboardArrowDownIcon fontSize="small" />
                        </Button>
                    </Box>
                </Box>
        </Box>
    );
};

export default Testimonials;
