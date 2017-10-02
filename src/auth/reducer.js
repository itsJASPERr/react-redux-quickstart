import * as type from "./actionTypes";

const initialState = {
  error:   {},
  loading: false,
  token:   "",
  profile: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case type.AUTH_SUCCESSFUL:
      return {
        loading:  false,
        token:    action.payload.token,
        profile:    action.payload.profile,
        error:    {},
      };

    case type.AUTH_FAILED:
      return {
        ...state,
        loading:  false,
        token:    "",
        error: {
          code:     action.payload.error,
          message:  action.payload.details,
        },
      };

    case type.LOGOUT:
      return initialState;

    default:
      return state;
  }
};
