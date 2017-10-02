import { connect } from "react-redux";
import * as a from "../actions";
import Login from "../_presentation/Login";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onGoogleResponse: (event) => dispatch(a.loginWithGoogle(event)),
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
