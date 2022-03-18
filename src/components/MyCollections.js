import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import CollectionPageItem from "./CollectionPageItem";

const style = {
  width: { sm: 600, md: 1000 },
  backgroundColor: "primary.light",
  boxShadow: 6,
  m: 3,
};

const MyCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9000/api/collections`).then((res) => {
      setCollections(res.data);
    });
  }, []);

  return (
    <Box sx={{ ...style, width: 1100 }}>
      <Button sx={{ ...style }} color="primary" variant="contained">
        CREATE NEW COLLECTION
      </Button>
      <Typography
        sx={{ ...style, mb: 2, p: 1, border: "solid black 2px" }}
        variant="h1"
        color="secondary"
      >
        My Collections
      </Typography>
      {collections &&
        collections.map((collection) => {
          return (
            <CollectionPageItem
              key={collection.collection_id}
              collection={collection}
            />
          );
        })}
      {/* <Grid container spacing={1} justify="center">
        <Grid item xs={3} sm={6}>
          <Paper sx={{ ...style, height: 75, width: "75%" }} />
        </Grid>
        <Grid item xs={3} sm={6}>
          <Paper sx={{ ...style, height: 75, width: "75%" }} />
        </Grid>
        <Grid item xs={3} sm={6}>
          <Paper sx={{ ...style, height: 75, width: "75%" }} />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default MyCollections;
