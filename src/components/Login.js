import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";

const style = {
  mt: 2,
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
};

const Login = () => {
  const navigate = useNavigate();

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
      <Typography variant="h4">Login</Typography>
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
      <Button
        sx={{ ...style }}
        color="primary"
        variant="contained"
        onClick={() => navigate("/mycollections")}
      >
        LOGIN
      </Button>
    </Box>
  );
};

export default Login;
