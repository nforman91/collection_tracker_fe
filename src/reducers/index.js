import { DELETE_COLLECTION, FETCH_COLLECTIONS_SUCCESS } from "../actions";
// import { collections } from "../components/MyCollections";

export const initialState = {
  //   collections: collections,
  collection_name: "",
  collection_id: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COLLECTION:
      return {
        collections: state.collections.filter(
          (collection) => action.payload !== collection.collection_id
        ),
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: action.payload.collections,
      };
    default:
      return state;
  }
};

export default reducer;
