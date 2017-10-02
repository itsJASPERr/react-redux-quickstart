import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from "./react-logo.svg";
import Login from "./auth/_container/LoginContainer";
import auth from "./auth";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {
          !this.props.isAuthenticated &&
          <Login />
        }
        {
          this.props.isAuthenticated &&
          <p>Hi, { this.props.profile.name } from Google </p>
        }
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated:  PropTypes.bool.isRequired,
  profile:          PropTypes.any,
};

App.defaultProps = {
  isAuthenticated: false,
  profile: {},
};

const mapStateToProps = (state) => ({
  isAuthenticated:  auth.selectors.isAuthenticated(state),
  profile:          auth.selectors.getProfile(state),
});

const mapDispatchToProps = () => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
