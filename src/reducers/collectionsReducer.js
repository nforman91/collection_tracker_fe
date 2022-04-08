// import axios from "axios";
import {
  //   DELETE_COLLECTION,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAIL,
} from "../actions/collectionsAction";
// import { collections } from "../components/MyCollections";
// import fetchCollections from "../api/fetchCollections";

export const initialState = {
  collections: [],
  loading: false,
  error: null,
};

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case DELETE_COLLECTION:
    //   return {
    //     collections: state.collections.filter(
    //       (collection) => action.payload !== collection.collection_id
    //     ),
    //   };
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

export default collectionsReducer;
