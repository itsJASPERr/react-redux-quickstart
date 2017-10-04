import * as type from "./actionTypes";

export const authRequest = () => ({
  type: type.AUTH_REQUEST,
  payload: {},
});

export const authSuccessful = (event) => {
  const profile = event.profileObj ? event.profileObj : undefined;
  const token = event.tokenObj && event.tokenObj.id_token ?
    event.tokenObj.id_token : undefined; // otken object.id
  return {
    type: type.AUTH_SUCCESSFUL,
    payload: { token, profile },
  };
};

export const authFailed = (error, details) => ({
  type: type.AUTH_FAILED,
  payload: { error, details },
});
