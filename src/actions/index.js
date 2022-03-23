export const DELETE_COLLECTION = "DELETE_COLLECTION";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";

export const deleteCollection = (collection_id) => {
  return { type: DELETE_COLLECTION, payload: collection_id };
};

export const fetchCollections = (collections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: { collections },
});
