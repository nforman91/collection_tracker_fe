import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { CollectionContext } from "../contexts/CollectionContext";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import CollectionPageItem from "./CollectionPageItem";
// import fetchCollections from "../api/fetchCollections";
import { fetchCollections } from "../../actions/collectionsAction";
import { connect } from "react-redux";
import styled from "styled-components";

const style = {
  backgroundColor: "primary.light",
  m: 3,
  display: "flex",
  flexWrap: "wrap",
};

const MyCollections = () => {
  // const { collections } = props;
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // const collections = fetchCollections();
    // console.log("COLLECTIONS: ", collections);
    // setMyCollections(collections);
    return axios
      .get(`http://localhost:9000/api/collections`)
      .then(res => {
        console.log(res.data, "RES.DATA")
        setCollections(res.data);
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

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
          height: 100,
          width: 1000,
          
        }}
        variant="h1"
        color="secondary"
      >
        <u>My Collections</u>
      </Typography>
      <Button sx={{
        m: "0 2rem 0 2rem",
        width: { sm: 100, md: 300 },
        boxShadow: 6,
        borderRadius: "10rem",
      }} color="primary" variant="contained">
        <StyledLink>
          <Link to="/mycollections/createnew">Create New Collection</Link>
        </StyledLink>
      </Button>
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
          })
          }
      </Box>
    </Box>
  );
};

const StyledLink = styled.div`
  a{
    color: #000;
    text-decoration: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    collections: state.collections,
  };
};

export default connect(mapStateToProps)(MyCollections);
// export default MyCollections;
