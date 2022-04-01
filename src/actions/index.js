import axios from "axios";
export const DELETE_COLLECTION = "DELETE_COLLECTION";
export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAIL = "FETCH_COLLECTIONS_FAIL";

export const fetchCollections = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());

    axios
      .get(`http://localhost:9000/api/collections`)
      .then((res) => {
        dispatch(fetchCollectionsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCollectionsFail(err.message));
      });
  };
};

export const deleteCollection = (collection_id) => {
  return { type: DELETE_COLLECTION, payload: collection_id };
};

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
  payload: { loading: true },
});

export const fetchCollectionsSuccess = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: { collections },
});

export const fetchCollectionsFail = (error) => ({
  type: FETCH_COLLECTIONS_FAIL,
  payload: { error },
});
