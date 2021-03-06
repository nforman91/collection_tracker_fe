// import axios from "axios";
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  //   DELETE_USER,
} from "../actions/usersAction";
// import { users } from "../components/MyUsers";
// import fetchusers from "../api/fetchUsers";

export const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    // case DELETE_USER:
    //   return {
    //     users: state.users.filter(
    //       (user) => action.payload !== user.user_id
    //     ),
    //   };
    default:
      return state;
  }
};

export default usersReducer;
