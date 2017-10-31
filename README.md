# react-redux-quickstart
[![License](https://img.shields.io/github/license/itsJASPERr/react-redux-quickstart.svg)](https://github.com/itsJASPERr/react-redux-quickstart/blob/master/LICENSE)
[![Build Status Linux](https://travis-ci.org/itsJASPERr/react-redux-quickstart.svg?branch=master)](https://travis-ci.org/itsJASPERr/react-redux-quickstart)
[![Build status Windows](https://ci.appveyor.com/api/projects/status/q0le60y3ie63m2w5/branch/master?svg=true)](https://ci.appveyor.com/project/itsJASPERr/react-redux-quickstart/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/itsJASPERr/react-redux-quickstart/badge.svg?branch=master)](https://coveralls.io/github/itsJASPERr/react-redux-quickstart?branch=master)
[![Dependency status](https://www.versioneye.com/user/projects/59d5da440fb24f0046190db9/badge.svg)](https://www.versioneye.com/user/projects/59d5da440fb24f0046190db9)
[![Known Vulnerabilities](https://snyk.io/test/github/itsJASPERr/react-redux-quickstart/badge.svg)](https://snyk.io/test/github/itsJASPERr/react-redux-quickstart)
[![BCH compliance](https://bettercodehub.com/edge/badge/itsJASPERr/react-redux-quickstart?branch=master)](https://bettercodehub.com/)
[![codebeat badge](https://codebeat.co/badges/53627ae5-79a0-474b-bda4-9fcadf67f1e3)](https://codebeat.co/projects/github-com-itsjasperr-react-redux-quickstart-master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0e2a8cea741c43afa6fb90fef37d3a5e)](https://www.codacy.com/app/itsJASPERr/react-redux-quickstart?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=itsJASPERr/react-redux-quickstart&amp;utm_campaign=Badge_Grade)


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
fork or clone this project
```
git clone git@github.com:itsJASPERr/react-redux-quickstart.git kickstart-project
cd kickstart-project
```
paste your google dev client id
```
// in ./src/constants.js
export const GOOGLE_CLIENT_ID = "your client id";
```
install, start
```
npm install
npm start
```

# working status
## react-router
I just started integrating `react-router`, the newest version, which recently got a heavy rework compared to the last major one. In the current implementation of `react-router` everything is a react component and enables dynamic routing. These specification require one to deeply integrate Router in ones code - if a lot of routing is to be implemented from a lot of custom components and their sub components. This is my fear with the current concept, however, and I don't know how to feel about this yet. Is it a good thing, or a bad? How is this supposed to be handled in a scaling application? How does the separation of `react-router` into native, web, and core influence a cross-platform integration?

# roadmap
| Version | Goals / Features | status |
|---------|------------------|-----------|
| 0.1.0 | react redux linting test setup | implemented |
| 0.2.0 | integration of react router | wip |
| 0.3.0 |  | in planning |

- integration of react router
- proper OAuth with storing the token
- integrating react-native and make it a cross platform project
- integrate custom android & iOS implementation for UI
- native implementation of a functionality for android & iOS via RN Bridge
  - keep other functionality working -> native session etc.
