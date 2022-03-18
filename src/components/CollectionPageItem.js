import React from "react";
import { Link } from "react-router-dom";

const CollectionPageItem = (props) => {
  const { collection_id, collection_name } = props.collection;

  return (
    <div>
      <div>{collection_name}</div>
      <Link to={`/collections/${collection_id}`}>
        <button>View Collection</button>
      </Link>
    </div>
  );
};

export default CollectionPageItem;
