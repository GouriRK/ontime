// Import the action type constants
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';// Update with the actual path to your actionTypes

export const signInRequest = (email: string, password: string) => ({
  type: SIGN_IN_REQUEST,
  payload: { email, password },
});

export const signInSuccess = (user: any) => ({
  type: SIGN_IN_SUCCESS,
  payload: { user },
});

export const signInFailure = (error: any) => ({
  type: SIGN_IN_FAILURE,
  payload: { error },
});

export const signUpRequest = (userData: any) => ({
  type: SIGN_UP_REQUEST,
  payload: userData,
});

export const signUpSuccess = (user: any) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user },
});

export const signUpFailure = (error: any) => ({
  type: SIGN_UP_FAILURE,
  payload: { error },
});
