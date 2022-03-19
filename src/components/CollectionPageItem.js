import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const style = {
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
  mt: 1,
  ml: 3,
  p: 2,
  display: "flex",
  justifyContent: "space-between",
};

const CollectionPageItem = (props) => {
  const { collection_id, collection_name } = props.collection;

  return (
    <Box sx={{ ...style }}>
      <div>{collection_name}</div>
      <Link to={`/collections/${collection_id}`}>
        <button>View Collection</button>
      </Link>
    </Box>
  );
};

export default CollectionPageItem;
