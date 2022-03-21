export const DELETE_COLLECTION = "DELETE_COLLECTION";

export const deleteMovie = (collection_id) => {
  return { type: DELETE_COLLECTION, payload: collection_id };
};
