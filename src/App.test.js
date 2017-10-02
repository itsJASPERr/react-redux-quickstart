import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
describe("App Test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const testProfile = { name: "Jasper" };
    ReactDOM.render(
      <App profile={ testProfile }
        isAuthenticated
      />,
      div);
  });
});
