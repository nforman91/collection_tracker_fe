import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const style = {
  mt: 2,
  width: { sm: 500, md: 800 },
  backgroundColor: "primary.light",
  boxShadow: 6,
  m: 3,
};

const Home = () => {
  return (
    <Typography sx={{ ...style, border: "solid black 1px", p: 3 }} variant="h4">
      Welcome to the Collection Tracker!
    </Typography>
  );
};

export default Home;
