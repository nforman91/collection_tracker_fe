import React from "react";
import { Box, Typography, Button } from "@mui/material";

const DeleteCollectionModal = (props) => {
  const { collection } = props;

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
        {`Are you sure you want to delete collection ${collection.collection_name}?`}
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

export default DeleteCollectionModal;
