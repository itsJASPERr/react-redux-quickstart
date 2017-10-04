import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

describe("Login Test", () => {
  it("should render", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Login
        onRequest={ jest.fn() }
        onSuccess={ jest.fn() }
        onFailure={ jest.fn() }
      />, div);
  });
});
