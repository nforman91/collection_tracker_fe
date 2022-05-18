import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography, Button } from "@mui/material";

const style = {
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
  m: 3,
};

const CreateNewCollection = (props) => {
  const navigate = useNavigate();

  const initialFormValues = {
    collection_name: "",
    collection_type: "",
  };

  // const initialFormErrors = {
  //   collection_name: "",
  //   collection_type: "",
  // };

  const initialCollection = [];

  const [collection, setCollection] = useState(initialCollection);
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postCollection = (newCollection) => {
    axios
      .post(`http://localhost:9000/api/collections`, newCollection)
      .then((res) => {
        setCollection([res.data, ...collection]);
        setFormValues(initialFormValues);
        navigate("/mycollections");
      })
      .catch((err) => {
        console.log(err);
        setFormValues(initialFormValues);
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newCollection = {
      collection_name: formValues.collection_name.trim(),
      collection_type: formValues.collection_type.trim(),
    };
    postCollection(newCollection);
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="collection-object">
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
        <Typography variant="h2">Create New Collection</Typography>
        <Typography variant="h4">Collection Name</Typography>
        <TextField
          required
          id="standard-required"
          label="Collection Name"
          variant="standard"
          name="collection_name"
          type="text"
          onChange={onChange}
          value={formValues.collection_name}
        />
        <Typography variant="h4">Collection Type</Typography>
        <TextField
          required
          id="standard-required"
          label="Collection Type"
          variant="standard"
          name="collection_type"
          type="text"
          onChange={onChange}
          value={formValues.collection_type}
        />
        <Button
          sx={{ ...style }}
          color="primary"
          variant="contained"
          onClick={formSubmit}
        >
          CREATE NEW COLLECTION
        </Button>
      </Box>
    </div>
  );
};

export default CreateNewCollection;
