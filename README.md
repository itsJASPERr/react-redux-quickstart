# react-redux-quickstart
This is a project to kickstart a `react` `redux` environment with proper setup, `testing` and `linting`.

This setup uses a non-sessioned, very simplistic version of a google signing via `react-google-login` component and serves as a basic example for architecture for a scaling project.

# setup
npm and node required
```
$ npm -v
3.10.10
$ node -v
v6.11.3
```
fork or clone this project, install, start
```
git clone git@github.com:itsJASPERr/react-redux-quickstart.git kickstart-project
cd kickstart-project
npm install
npm start
```

# roadmap
| Version | Goals / Features | status |
|---------|------------------|-----------|
| 0.1.0 | react redux linting test setup | implemented |
| 0.2.0 |  | in planning |
| 0.3.0 |  | in planning |

- integration of react router
- proper OAuth with storing the token
- integrating react-native and make it a cross platform project
- integrate custom android & iOS implementation for UI
- native implementation of a functionality for android & iOS via RN Bridge
  - keep other functionality working -> native session etc.
