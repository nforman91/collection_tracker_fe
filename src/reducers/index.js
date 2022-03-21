import { DELETE_COLLECTION } from "../actions";
// import { collections } from "../components/MyCollections";
import axios from "axios";

export const initialState = {
  collections: axios.get(`http://localhost:9000/api/collections`),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COLLECTION:
      return {
        collections: state.collections.filter(
          (collection) => action.payload !== collection.collection_id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
