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
  // const [username, setUsername] = useState([]);
  // const [password, setPassword] = useState([]);
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(values)
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:9000/api/users/login", values)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      // localStorage.setItem("username", res.data.username);
      navigate("/mycollections");
    });
    const token = await loginUser({
      values
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
        value={values.username}
        type="text"
        onChange={handleChange}
      />
      <TextField
        required
        id="standard-required-password"
        label="Password"
        variant="standard"
        value={values.password}
        type="password"
        onChange={handleChange}
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
