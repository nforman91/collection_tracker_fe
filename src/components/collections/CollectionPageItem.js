import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DeleteCollectionModal from "./DeleteCollectionModal";
import styled from "styled-components";

const style = {
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
  mt: 2,
  ml: 2,
  p: 2,
  flexWrap: "wrap",
  borderRadius: 5,
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
      <div>Collection Tag: {collection.collection_tag}</div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* <Link
          to={{
            pathname: `/mycollections/${collection.collection_name}/update`,
            state: { collection: collection },
          }}
        >
          <Button sx={{ ...buttonStyle }}>Edit</Button>
        </Link> */}
        <StyledLink>
        <Link
          to={{
            pathname: `/mycollections/${collection.collection_name}`,
            state: { collection: collection },
          }}
          //   state={collection}
            // collection={collection}
          //   setCollections={setCollections}
        >
          <Button sx={{ ...buttonStyle }}>View</Button>
        </Link>
        </StyledLink>
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

const StyledLink = styled.div`
  a{
    color: #000;
    text-decoration: none;
  }
`;

export default CollectionPageItem;
