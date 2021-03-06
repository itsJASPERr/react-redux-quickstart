import { connect } from "react-redux";
import * as a from "../actions";
import * as s from "../selectors";
import Login from "../_presentation/Login";

const mapStateToProps = (state) => ({
  error: s.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRequest: () => dispatch(a.authRequest()),
  onSuccess: (event) => dispatch(a.authSuccessful(event)),
  onFailure: (e) => dispatch(a.authFailed(e)),
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
