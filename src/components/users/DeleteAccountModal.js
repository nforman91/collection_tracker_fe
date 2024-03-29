import React from "react";
import { Box, Typography, Button } from "@mui/material";

const DeleteAccountModal = (props) => {
  const { user } = props;

  const style = {
    height: 30,
    width: 80,
    mr: 5,
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
  };

  const handleYes = () => {
    props.handleYes();
  };

  const handleNo = () => {
    props.handleNo();
  };

  return (
    <Box
      sx={{
        width: 250,
        height: 80,
        border: "1px solid black",
        backgroundColor: "white",
        mt: -5,
        p: 1,
        borderRadius: 2,
      }}
    >
      <Typography>
        Are you sure you want to delete your account?
      </Typography>
      <Button sx={{ ...style }} onClick={handleYes}>
        Yes
      </Button>
      <Button sx={{ ...style }} onClick={handleNo}>
        No
      </Button>
    </Box>
  );
};

export default DeleteAccountModal;
