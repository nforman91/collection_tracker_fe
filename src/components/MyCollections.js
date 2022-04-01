import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { CollectionContext } from "../contexts/CollectionContext";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import CollectionPageItem from "./CollectionPageItem";
// import fetchCollections from "../api/fetchCollections";
import { connect } from "react-redux";

const style = {
  backgroundColor: "primary.light",
  boxShadow: 6,
  m: 3,
  display: "flex",
  flexWrap: "wrap",
};

const MyCollections = (props) => {
  const { collections } = props;
  //   const [collection] = useContext(CollectionContext);
  const [myCollections, setMyCollections] = useState([]);

  useEffect(() => {
    // fetchCollections()
    // .then((res) => {
    setMyCollections(collections);
    // });
  }, []);

  return (
    <Box
      sx={{
        ...style,
        height: "100%",
        width: 1150,
        alignItems: "flex-start",
      }}
    >
      <Typography
        sx={{
          ...style,
          p: 1,
          border: "solid black 1px",
          height: 100,
          width: 1000,
        }}
        variant="h1"
        color="secondary"
      >
        My Collections
      </Typography>
      <Box sx={{ ml: 3 }}>
        <Link to="/mycollections/createnew">Create New Collection</Link>
      </Box>
      <Box sx={{ ...style, p: 2 }}>
        {collections &&
          collections.map((collection) => {
            return (
              <CollectionPageItem
                key={collection.collection_id}
                collection={collection}
                // setCollections={setCollections}
              />
            );
          })}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: state.collections,
  };
};

export default connect(mapStateToProps)(MyCollections);
// export default MyCollections;
