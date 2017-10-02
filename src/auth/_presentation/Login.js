import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import GoogleLogin from "react-google-login";

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

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    // tood this could be a global app wrapper
    // or be implemented as a component wrapper => component based errors
    if (this.state.hasError) {
      return <span>Error</span>;
    }
    return (
      <GoogleLogin
        clientId="983294396646-krmfgsjtqcalpij46im4j5do2j1psdlk.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={ this.onGoogleResponse }
        onFailure={ this.onGoogleResponse }
      />
    );
  }
}

Login.propTypes = {
  onGoogleResponse: PropTypes.func.isRequired,
};

Login.defaultProps = {};
