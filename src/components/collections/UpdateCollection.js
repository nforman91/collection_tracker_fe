import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Typography, Button } from "@mui/material";

const style = {
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
  m: 3,
};

// const initialState = {
//   collection_name: "",
//   collection_type: "",
// };

const UpdateCollection = (props) => {
  const navigate = useNavigate();
  const { collection, collection_name, collection_type, collection_tag } = props;
  const [updatedCollection, setUpdatedCollection] = useState(collection);

  const handleUpdate = () => {
    axios
      .then((res) => {
        setUpdatedCollection([res.data, ...collection]);
        navigate(`/mycollections/${collection.collection_name}`);
      })
  }

  return (
    <div className="collection-update">
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
        <Typography variant="h2">Update A Collection</Typography>
        <Typography variant="h4">Update Collection Name</Typography>
        <TextField
          required
          id="standard-required"
          label="Collection Name"
          variant="standard"
          name="collection_name"
          type="text"
          //   onChange={changeCollectionName}
          // value={formValues.collection_name}
          placeholder={collection_name}
        />
        <Typography variant="h4">Update Collection Type</Typography>
        <TextField
          id="standard"
          label="Collection Type"
          variant="standard"
          name="collection_type"
          type="text"
          //   onChange={changeCollectionType}
          // value={formValues.collection_type}
          placeholder={collection_type}
        />
        <Typography variant="h4">Update Collection Tag</Typography>
        <TextField
          id="standard"
          label="Collection Tag"
          variant="standard"
          name="collection_tag"
          type="text"
          //   onChange={changeCollectionTag}
          // value={formValues.collection_tag}
          placeholder={collection_tag}
        />
        <Button
          sx={{ ...style }}
          color="primary"
          variant="contained"
            onClick={handleUpdate}
        >
          UPDATE COLLECTION
        </Button>
      </Box>
    </div>
  );
};

export default UpdateCollection;
