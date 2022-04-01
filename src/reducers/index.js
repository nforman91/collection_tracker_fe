// import axios from "axios";
import {
  DELETE_COLLECTION,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAIL,
} from "../actions";
// import { collections } from "../components/MyCollections";
// import fetchCollections from "../api/fetchCollections";

// const getCollections = () => async (dispatch) => {
//   try {
//     let data = await axios.get(`http://localhost:9000/api/collections`);
//     dispatch({ type: "DATA_INITIALIZED", data });
//   } catch {
//     console.log("Error");
//   }
// };

// const getCollections = () => {
//     return new Promise((resolve, reject) => {
//         axios.get(`http://localhost:9000/api/collections`)
//         .then((res) => {
//             resolve(res.data)
//         })
//         .catch(err => {
//             reject(err)
//         })
//     })
// }

// let userData = getCollections();

// getCollections().then(function(userData)){
//     const initialState = {
//         userData: userData
//     }
//     console.log(initialState.userData)
// }

export const initialState = {
  //   collections: collections,
  //   collection_name: "",
  //   collection_id: "",
  //  fetchCollections({
  //      collection_name: collection_name,
  //      collection_type: collection_type,
  //  });
  //   userData: userData,
  collections: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COLLECTION:
      return {
        collections: state.collections.filter(
          (collection) => action.payload !== collection.collection_id
        ),
      };
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: action.payload.collections,
      };
    case FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
