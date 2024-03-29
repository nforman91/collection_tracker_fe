import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../../animation";

const style = {
  mt: 2,
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
};

// const initialUser = {
//   username: "",
//   password: "",
// };

const Signup = () => {
  const navigate = useNavigate();

  const initialSignUpValues = {
    username: "",
    password: "",
  };

  const initialUser = [];

  const [user, setUser] = useState(initialUser);
  const [signUpValues, setSignUpValues] = useState(initialSignUpValues);

  const postUser = (newUser) => {
    axios
      .post("http://localhost:9000/api/users/signup", newUser)
      .then((res) => {
        setUser([res.data, ...user]);
        setSignUpValues(initialSignUpValues);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setSignUpValues(initialSignUpValues);
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: signUpValues.username.trim(),
      password: signUpValues.password.trim(),
    };
    postUser(newUser);
  };

  const handleChange = (e) => {
    console.log(signUpValues);
    setSignUpValues({
      ...signUpValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    navigate("/login")
  }

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
      <StyledSignup
        variants={titleAnim}
        initial="hidden"
        animate="show"
      >
      <TextField
        required
        id="standard-required"
        label="Username"
        variant="standard"
        name="username"
        value={signUpValues.username}
        onChange={handleChange}
      />
      <TextField
        required
        id="standard-required"
        label="Password"
        variant="standard"
        name="password"
        value={signUpValues.password}
        onChange={handleChange}
      />
      <Button sx={{ ...style }} color="primary" variant="contained" onClick={formSubmit}>
        SIGNUP
      </Button>
      <Typography sx={{ mt: 2 }}>Already signed up?</Typography>
      <Button sx={{ ...style }} color="primary" variant="contained" onClick={handleLogin}>
        Go to Login
      </Button>
      </StyledSignup>
    </Box>
  );
};

const StyledSignup = styled(motion.div)`
    color: black;
    display: flex;
    flex-direction: column;
`;

export default Signup;
