import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

const style = {
  mt: 2,
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
};

const Signup = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      m={3}
    >
      <Typography variant="h4">Signup</Typography>
      <TextField
        required
        id="standard-required"
        label="Username"
        variant="standard"
      />
      <TextField
        required
        id="standard-required"
        label="Password"
        variant="standard"
      />
      <Button sx={{ ...style }} color="primary" variant="contained">
        SIGNUP
      </Button>
    </Box>
  );
};

export default Signup;
