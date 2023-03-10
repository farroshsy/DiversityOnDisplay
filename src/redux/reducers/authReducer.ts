import { AUTH_ERROR, LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
//   user: localStorage.setItem('user', action.user ? JSON.stringify(action.user) : ''),
  error: null,
};

const authReducer = (state = initialState, action: { type: any; payload: string | null; user: any; }) => {  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload || '');
      localStorage.setItem('user', JSON.stringify(action.user));

      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        user: action.user,
        error: null,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: null,
      };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: action.payload || "",
      };
    default:
      return state;
  }
};

export default authReducer;
