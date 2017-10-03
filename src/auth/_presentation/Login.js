import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import GoogleLogin from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../constants";

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.onGoogleResponse = this.onGoogleResponse.bind(this);
    this.state = {
      hasError: false,
      error: "",
      info: "" };
  }

  onGoogleResponse(event) {
    this.props.onGoogleResponse(event);
  }

  // component based error handling
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    if (this.state.hasError) {
      return <span>Error</span>;
    }
    return (
      <div>
        {
          this.props.error &&
          <div>
            ERROR: <br />
            { this.props.error.code }
            <br />
            { this.props.error.details }
          </div>
        }
        {
          // missing or wrong client id
          (!this.props.error || (this.props.error && this.props.error.code !== "idpiframe_initialization_failed")) &&
          <GoogleLogin
            clientId={ GOOGLE_CLIENT_ID }
            buttonText="Login"
            onSuccess={ this.onGoogleResponse }
            onFailure={ this.onGoogleResponse }
          />
        }
      </div>
    );
  }
}

Login.propTypes = {
  onGoogleResponse: PropTypes.func.isRequired,
  error: PropTypes.any,
};

Login.defaultProps = {};
