import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const CollectionPage = (props) => {
  const { collection_id } = useParams();

  //   const { collections } = props;
  const collections = props.collections;

  const collection = collections.find(
    (collection) => collection.collection_id === collection_id
  );

  return <div>Collection Name: {collection.collection_name}</div>;
};

export default CollectionPage;
