import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import CollectionPageItem from "./CollectionPageItem";
// import { connect } from "react-redux";

const style = {
  backgroundColor: "primary.light",
  boxShadow: 6,
  m: 3,
  display: "flex",
  flexWrap: "wrap",
};

const MyCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9000/api/collections`).then((res) => {
      setCollections(res.data);
    });
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
      <Box sx={{ ...style, p: 2 }}>
        {collections &&
          collections.map((collection) => {
            return (
              <CollectionPageItem
                key={collection.collection_id}
                collection={collection}
                setCollections={setCollections}
              />
            );
          })}
      </Box>
    </Box>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     collections: state.collections,
//   };
// };

// export default connect(mapStateToProps)(MyCollections);
export default MyCollections;
