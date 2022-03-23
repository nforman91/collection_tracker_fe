import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";

const style = {
  mt: 2,
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
};

const credentials = {
  username: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(credentials);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/users/login", login).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      navigate("/mycollections");
    });
  };

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
      onSubmit={handleSubmit}
    >
      <Typography variant="h4">Login</Typography>
      <TextField
        required
        id="standard-required"
        label="Username"
        variant="standard"
        // value={login.username}
        onChange={handleChange}
      />
      <TextField
        required
        id="standard-required"
        label="Password"
        variant="standard"
        // value={login.password}
        onChange={handleChange}
      />
      <Button sx={{ ...style }} color="primary" variant="contained">
        LOGIN
      </Button>
    </Box>
  );
};

export default Login;
