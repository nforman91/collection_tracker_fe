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

const Signup = () => {
  const [signUpValues, setSignUpValues] = useState(initialSignUpValues);
  const navigate = useNavigate();

  //   const onChange = (name, value) => {
  //     console.log(signUpValues);
  //     setSignUpValues({ ...signUpValues, [name]: value });
  //   };

  //   const change = (e) => {
  //     const { name, value } = e.target;
  //     onChange(name, value);
  //   };

  //   const submitChange = (e) => {
  //     e.preventDefault();
  //     submit();
  //   };

  //   const submit = () => {
  //     const newUser = {
  //       username: signUpValues.username,
  //       password: signUpValues.password,
  //     };
  //     postUser(newUser);
  //   };

  const handleChange = (name, value) => {
    console.log(signUpValues);
    setSignUpValues({
      ...signUpValues,
      [name]: value,
    });
  };

  const postUser = (e) => {
    axios
      .post("http://localhost:9000/api/users/signup", signUpValues)
      .then((res) => {
        console.log(res);
        // setSignUpValues(initialSignUpValues);
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
        // e.preventDefault();
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
      {/* <form onSubmit={submitChange}>
        <label>
          Username:
          <input
            onChange={change}
            value={signUpValues.username}
            type="text"
            name="username"
          />
        </label>
        <label>
          Password:
          <input
            onChange={change}
            value={signUpValues.password}
            type="text"
            name="password"
          />
        </label>
        <button>SUBMIT</button>
      </form> */}
    </Box>
  );
};

export default Signup;
