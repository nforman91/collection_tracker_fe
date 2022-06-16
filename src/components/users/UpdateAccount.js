import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../../animation";

const style = {
  mt: 2,
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
};

const initialUpdateValues = {
  username: "",
  password: "",
};

const UpdateAccount = (props) => {
    const { users } = props;

  const [updateValues, setUpdateValues] = useState(initialUpdateValues);
  const [currentUser, setCurrentUser] = useState(users);
  const navigate = useNavigate();

  const handleUpdate = (name, value) => {
    // console.log(updateValues);
    // setUpdateValues({
    //   ...updateValues,
    //   [name]: value,
    // });
  };

  const postUpdatedUser = (newUpdatedUser) => {
    // axios
    //   .post("http://localhost:9000/api/users/update", newUpdatedUser)
    //   .then((res) => {
    //     setCurrentUser([res.data, ...users]);
    //     setUpdateValues(initialUpdateValues);
    //     navigate("/myaccount");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setUpdateValues(initialUpdateValues);
    //   });
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
      onSubmit={postUpdatedUser}
    >
      <Typography variant="h4">Update</Typography>
      <StyledUpdateAccount
        variants={titleAnim}
        initial="hidden"
        animate="show"
      >
      <TextField
        required
        id="standard-required"
        label="Username"
        variant="standard"
        value={updateValues.username}
        onChange={handleUpdate}
      />
      <TextField
        required
        id="standard-required"
        label="Password"
        variant="standard"
        value={updateValues.password}
        onChange={handleUpdate}
      />
      <Button sx={{ ...style }} color="primary" variant="contained">
        Update
      </Button>
      </StyledUpdateAccount>
    </Box>
  );
};

const StyledUpdateAccount = styled(motion.div)`
    color: black;
    display: flex;
    flex-direction: column;
`;

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(UpdateAccount);
// export default Update;
