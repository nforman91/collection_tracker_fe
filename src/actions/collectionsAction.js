import axios from "axios";
// import { useDispatch } from "react-redux";

export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAIL = "FETCH_COLLECTIONS_FAIL";
// export const DELETE_COLLECTION = "DELETE_COLLECTION";

export const fetchCollections = dispatch => {
  // const dispatch = useDispatch();
  dispatch(fetchCollectionsStart());
  return axios
      .get(`http://localhost:9000/api/collections`)
      .then((res) => {
        dispatch(fetchCollectionsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCollectionsFail(err.message));
      });
  // try{
  //   dispatch(fetchCollectionsStart());
  //     return axios
  //         .get(`http://localhost:9000/api/collections`)
  //         .then((res) => {
  //           dispatch(fetchCollectionsSuccess(res.data));
  //         })
  //         .catch((err) => {
  //           dispatch(fetchCollectionsFail(err.message));
  //         });
  // } catch (err) {
  //   console.log(err.message)
  // }
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

// export const deleteCollection = (collection_id) => {
//   return { type: DELETE_COLLECTION, payload: collection_id };
// };

// export const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
//     fetchCollectionsSuccess: () => dispatch(fetchCollectionsSuccess()),
//     fetchCollectionsFail: () => dispatch(fetchCollectionsFail()),
//   }
// }
