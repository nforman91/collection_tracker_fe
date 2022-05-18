import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";

const style = {
  mt: 2,
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
};

// const credentials = {
//   username: "",
//   password: "",
// };

async function loginUser(credentials){
  return fetch("http://localhost:9000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

const Login = (
  { setToken }
  ) => {
  // const [login, setLogin] = useState(credentials);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setLogin({
  //     ...login,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:9000/api/users/login", username, password)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      navigate("/mycollections");
    });
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
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
    >
      <Typography variant="h4">Login</Typography>
      <TextField
        required
        id="standard-required-username"
        label="Username"
        variant="standard"
        // value={login.username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        required
        id="standard-required-password"
        label="Password"
        variant="standard"
        // value={login.password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button sx={{ ...style }} color="primary" variant="contained" onClick={handleSubmit}>
        LOGIN
      </Button>
    </Box>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default Login;
