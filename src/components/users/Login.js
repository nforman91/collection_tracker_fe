import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../../animation";

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
  // const [username, setUsername] = useState([]);
  // const [password, setPassword] = useState([]);
    const initialLoginValues = {
      username: "",
      password: ""
    };

  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(loginValues)
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    navigate("/signup")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:9000/api/users/login", loginValues)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      // localStorage.setItem("username", res.data.username);
      navigate("/mycollections");
    });
    const token = await loginUser({
      loginValues
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
      <StyledLogin
        variants={titleAnim}
        initial="hidden"
        animate="show"
      >
      <TextField
        required
        id="standard-required-username"
        label="Username"
        variant="standard"
        value={loginValues.username}
        type="text"
        onChange={handleChange}
      />
      <TextField
        required
        id="standard-required-password"
        label="Password"
        variant="standard"
        value={loginValues.password}
        type="password"
        onChange={handleChange}
      />
      <Button sx={{ ...style }} color="primary" variant="contained" onClick={handleSubmit}>
        LOGIN
      </Button>
      <Typography sx={{ mt: 2 }}>Not signed up yet?</Typography>
      <Button sx={{ ...style }} color="primary" variant="contained" onClick={handleSignup}>
        Go to Signup
      </Button>
      </StyledLogin>
    </Box>
  );
};

const StyledLogin = styled(motion.div)`
    color: black;
    display: flex;
    flex-direction: column;
`;

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default Login;
