import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DeleteCollectionModal from "./DeleteCollectionModal";

const style = {
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
  mt: 1,
  ml: 3,
  p: 2,
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  //   flexDirection: "column",
};

const CollectionPageItem = (props) => {
  //   const { collection_id, collection_name, collection_type } = props.collection;
  const { collection } = props;
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
        props.setCollections(res.data);
      });
  };

  const handleNo = () => {
    setModal(false);
  };

  return (
    <Box sx={{ ...style }}>
      <div>{collection.collection_name}</div>
      <div>{collection.collection_type}</div>
      <Link to={`/mycollections/update`}>
        <button>EditNOT</button>
      </Link>
      <Link
        to={{
          pathname: `/mycollections/${collection.collection_name}`,
          state: { collection: collection },
        }}
      >
        <button>ViewNOT</button>
      </Link>
      <Button
        sx={{
          height: 30,
          width: 100,
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
        }}
        onClick={showModal}
      >
        Delete
      </Button>
      {modal && (
        <DeleteCollectionModal
          collection_name={collection.collection_name}
          handleYes={handleYes}
          handleNo={handleNo}
        />
      )}
    </Box>
  );
};

export default CollectionPageItem;
