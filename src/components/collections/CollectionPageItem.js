import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DeleteCollectionModal from "./DeleteCollectionModal";

const style = {
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
  mt: 2,
  ml: 2,
  p: 2,
  flexWrap: "wrap",
};

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

const CollectionPageItem = (props) => {
  const navigate = useNavigate();
  const { collection, setCollections } = props;
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
    console.log("Collection: ", collection);
  };

  const handleYes = () => {
    axios
      .delete(
        `http://localhost:9000/api/collections/${collection.collection_id}`
      )
      .then((res) => {
        // setCollections(res.data);
        navigate("/mycollections");
      });
  };

  const handleNo = () => {
    setModal(false);
  };

  return (
    <Box sx={{ ...style, display: "flex", flexDirection: "column" }}>
      <div>Collection Name: {collection.collection_name}</div>
      <div>Collection Type: {collection.collection_type}</div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* <Link
          to={{
            pathname: `/mycollections/${collection.collection_name}/update`,
            state: { collection: collection },
          }}
        >
          <Button sx={{ ...buttonStyle }}>Edit</Button>
        </Link> */}
        <Link
          to={{
            pathname: `/mycollections/${collection.collection_name}`,
            state: { collection: collection },
          }}
          //   state={collection}
          //   collection={collection}
          //   setCollections={setCollections}
        >
          <Button sx={{ ...buttonStyle }}>View</Button>
        </Link>
        <Button sx={{ ...buttonStyle }} onClick={showModal}>
          Delete
        </Button>
      </Box>
      <Box
        sx={{
          mt: 7,
        }}
      >
        {modal && (
          <DeleteCollectionModal
            collection={collection}
            // setCollections={setCollections}
            handleYes={handleYes}
            handleNo={handleNo}
          />
        )}
      </Box>
    </Box>
  );
};

export default CollectionPageItem;
