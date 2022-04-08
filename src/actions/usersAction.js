import axios from "axios";
// export const DELETE_USERS = "DELETE_USERS";
export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersStart());

    axios
      .get(`http://localhost:9000/api/users`)
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUsersFail(err.message));
      });
  };
};

// export const deleteUser = (user_id) => {
//   return { type: DELETE_USER, payload: user_id };
// };

export const fetchUsersStart = () => ({
  type: FETCH_USERS_START,
  payload: { loading: true },
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersFail = (error) => ({
  type: FETCH_USERS_FAIL,
  payload: { error },
});
