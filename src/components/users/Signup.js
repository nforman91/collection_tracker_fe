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

const initialSignUpValues = {
  username: "",
  password: "",
};

const initialUser = {
  username: "",
  password: "",
};

const Signup = () => {
  const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    console.log(signUpValues);
    setSignUpValues({
      ...signUpValues,
      [name]: value,
    });
  };

  const postUser = (newUser) => {
    axios
      .post("http://localhost:9000/api/users/signup", newUser)
      .then((res) => {
        setUser([res.data, ...signUpValues]);
        setSignUpValues(initialSignUpValues);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setSignUpValues(initialSignUpValues);
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
      onSubmit={postUser}
    >
      <Typography variant="h4">Signup</Typography>
      <TextField
        required
        id="standard-required"
        label="Username"
        variant="standard"
        value={signUpValues.username}
        onChange={handleChange}
      />
      <TextField
        required
        id="standard-required"
        label="Password"
        variant="standard"
        value={signUpValues.password}
        onChange={handleChange}
      />
      <Button sx={{ ...style }} color="primary" variant="contained">
        SIGNUP
      </Button>
    </Box>
  );
};

export default Signup;
