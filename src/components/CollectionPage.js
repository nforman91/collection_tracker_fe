import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const CollectionPage = (props) => {
  //   const [displayedCollection, setDisplayedCollection] = useState([]);
  //   const { collection } = props;
  const displayedCollection = useSelector((state) => state.collection);
  //   const { collection_id } = useParams();

  //   const { collections } = props;
  //   const collections = props.collections;

  //   const collection = collections.find(
  //     (collection) => collection.collection_id === collection_id
  //   );

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:9000/api/collections/${collection.collection_id}`)
  //       .then((res) => {
  //         setDisplayedCollection(res.data);
  //       });
  //   }, []);

  return <div>Collection Name: {displayedCollection.collection_name}</div>;
};

export default CollectionPage;
