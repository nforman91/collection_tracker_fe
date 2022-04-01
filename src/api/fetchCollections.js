import axios from "axios";

const fetchCollections = () => {
  return axios.get(`http://localhost:9000/api/collections`).then((res) => {
    const { collections } = res;
    console.log("THE DATA: ", res.data);

    // return (
    //   //   collection_name: collections.collection_name,
    //   //   collection_type: collections.collection_type,
    //   console.log(collections)
    // );
  });
};

export default fetchCollections;
