import * as type from "./actionTypes";

export const authRequest = () => ({
  type: type.AUTH_REQUEST,
  payload: {},
});

export const authSuccessful = (response) => {
  const profile = response.profileObj;
  const token = response.tokenObj.access_token;
  return {
    type: type.AUTH_SUCCESSFUL,
    payload: { token, profile },
  };
};

export const authFailed = (error, details) => ({
  type: type.AUTH_FAILED,
  payload: { error, details },
});
