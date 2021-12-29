import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
        
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src="/images/hero1.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 600}} />
                </div>
                <div>
                    <img src="/images/hero2.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 600}} />
                </div>
                <div>
                    <img src="/images/hero3.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 600}} />
                </div>
            </Slider>
            <Box display='flex' justifyContent='center' sx={{p: 4}} >
                <Typography variant='h1'>Welcome to the store</Typography>
            </Box>
        </>
    )
}