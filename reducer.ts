// reducer.ts

import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './actions';
import { AnyAction } from 'redux';
const initialState = {
  user: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload.error,
      };
      case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload.error,
      };


    default:
      return state;
  }
  
    
   
};

export default authReducer;
