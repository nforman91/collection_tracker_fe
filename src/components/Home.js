import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../animation";

const style = {
  mt: 2,
  width: "100%",
  height: "50em",
  m: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "flexStart",
};

const Home = () => {
  return (
    <StyledHome
      variants={titleAnim}
      initial="hidden"
      animate="show"
    >
    <Box sx={{ ...style }}>
      <Typography sx={{ 
        ...style, 
        border: "solid black 1px", 
        p: 3, 
        backgroundColor: "primary.light", 
        m: 3, 
        width: { sm: 500, md: 800 }, 
        height: "10em", 
        flexDirection: "column", 
        boxShadow: 6, 
        alignItems: "center"
        }} variant="h4">
        Welcome to the Collection Tracker!
        <Typography sx={{ ...style, p: 3, m: 3, width: "40em", alignItems: "flexStart", flexWrap: "wrap"}}>
        This is an app that you can use to track your collections! You have the ability to create an account. Once you have an account, you can create collections on your account.
        </Typography>
      </Typography>
    </Box>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
    color: black;
`;

export default Home;
