import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React from "react";


const About = () =>{

    const CustomBox = styled(Box)(({ theme }) =>({
        width:"30%",
        [theme.breakpoints.down("md")]:{
            width:"85%",
        },
    }));

    return(
        <Box
        sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            padding:"40px",
            mt:"65px",
            mb:"100px",

        }}
        >
            <div
                style={{
                    width:"5%",
                    height:"5px",
                    backgroundColor:"#000339",
                    margin:"0 auto",
                }}></div>

            <Typography
            variant="h3" 
            sx={{ fontSize:"35px", fontWeight:"bold", color:"#000339",my:3}}>
                About Us</Typography> 

            <CustomBox>
                <Typography
                variant="body2"
                sx={{
                    fontSize:"16px",
                    fontWeight:"500",
                    color:"#5a6473",
                    textAlign:"center",
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum
                </Typography>
            </CustomBox>
        </Box>
    );
};

export default About;