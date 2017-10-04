import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router";
import { App } from "./App";

describe("App Test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const testProfile = { name: "Jasper" };
    ReactDOM.render(
      withRouter(
        <App profile={ testProfile } isAuthenticated />),
      div);
  });
});
