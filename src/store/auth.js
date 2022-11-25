import React, {createContext, useReducer} from 'react';

// initial auth state
const initialAuthState = {
  is_authenticated: false,
  accessToken: '',
  user: undefined,
  user_id: '',
};

// auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        ...initialAuthState,
      };
    default:
      return state;
  }
};

// creating auth context
const AuthContext = createContext(initialAuthState);

// auth provider
const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const dispatches = {
    authenticateUser(isAuthenticated) {
      dispatch({
        type: 'AUTHENTICATE_USER',
        payload: isAuthenticated,
      });
    },
    setUserData(data) {
      dispatch({
        type: 'SET_USER_DATA',
        payload: data,
      });
    },
    logoutUser() {
      dispatch({
        type: 'LOGOUT_USER',
      });
    },
  };
  return (
    <AuthContext.Provider value={{...state, ...dispatches}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
