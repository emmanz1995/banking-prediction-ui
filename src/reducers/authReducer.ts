import { authTypes } from '../actions/actionTypes';

interface User {
  token: string;
  userInfo: {
    _id: string;
    email: string;
    username: string;
  };
}

const user: User = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { user, isAuthenticated: true, isLoading: false }
  : { user: null, isAuthenticated: false, isLoading: false };

const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case authTypes.LOADING_AUTH:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: true,
      };
    case authTypes.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        user: actions.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case authTypes.AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        user: actions.payload,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
