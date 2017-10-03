import * as type from "./actionTypes";

const authRequest = () => ({
  type: type.AUTH_REQUEST,
  payload: {},
});

const authSuccessful = (token, profile) => ({
  type: type.AUTH_SUCCESSFUL,
  payload: { token, profile },
});

const authFailed = (error, details) => ({
  type: type.AUTH_FAILED,
  payload: { error, details },
});

export const loginWithGoogle = (event) => (dispatch) => Promise.resolve()
  .then(() => dispatch(authRequest()))
  .then(() => {
    const profile = event.profileObj ? event.profileObj : undefined;
    const tokenId = event.tokenObj && event.tokenObj.id_token ?
      event.tokenObj.id_token : undefined; // otken object.id
    if (!profile && !tokenId) {
      dispatch(dispatch(authFailed(event.error, event.details)));
    } else {
      dispatch(authSuccessful(tokenId, profile));
    }
  });
