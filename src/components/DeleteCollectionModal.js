import React from "react";
import { Box, Typography } from "@mui/material";

const DeleteCollectionModal = (props) => {
  const { collection_name } = props;

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
        m: 1,
        p: 1,
      }}
    >
      <Typography>
        {`Are you sure you want to delete ${collection_name}?`}
      </Typography>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </Box>
  );
};

export default DeleteCollectionModal;
