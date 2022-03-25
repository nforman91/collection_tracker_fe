import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import UpdateCollection from "./UpdateCollection";

const buttonStyle = {
  height: 30,
  width: 80,
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
  mt: 1,
  mb: 1,
  //   textDecoration: "none",
};

const CollectionPage = (props) => {
  const { collection } = props;
  //   const [displayed, setDisplayed] = useState(collection);
  //   const displayedCollection = useSelector((state) => state.collection);
  const { collection_name } = useParams();
  const navigate = useNavigate();

  //   const { collections } = props;
  //   const collections = props.collections;

  //   const collection = collections.find(
  //     (collection) => collection.collection_id === collection_id
  //   );

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:9000/api/collections/${collection.collection_id}`)
  //     .then((res) => {
  //       setDisplayedCollection(res.data);
  //     });
  // }, []);

  //   const displayed = collection.filter(
  //     (display) => display === collection.collection_id
  //   );

  const showCollection = () => {
    console.log("Collection: ", collection);
  };

  return (
    <div>
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
        <Typography variant="h4">Collection Name: {collection_name}</Typography>
        {/* <Link
          to={{
            pathname: `/mycollections/${collection.collection_name}/update`,
            state: { collection: collection },
          }}
        > */}
        <Button
          sx={{ ...buttonStyle }}
          onClick={() => navigate(<UpdateCollection collection={collection} />)}
          //   collection={collection}
        >
          Edit
        </Button>
        {/* </Link> */}
        <Button onClick={showCollection}>Collection</Button>
        {/* <Typography variant="h4">Collection Type: {collection_type}</Typography> */}
      </Box>
    </div>
  );
};

export default CollectionPage;
