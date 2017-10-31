import { NAME } from "./constants";
import * as action from "./actions";
import * as type from "./actionTypes";

describe(`${NAME} Actions Test`, () => {
  describe("authRequest()", () => {
    const expectedAction = {
      type: type.AUTH_REQUEST,
      payload: {},
    };
    it("should return request action", () => {
      const actualAction = action.authRequest();
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe("authSuccessful()", () => {
    const expectedAction = {
      type: type.AUTH_SUCCESSFUL,
      payload: {
        token: "test_access_token",
        profile: "test_profile",
      },
    };

    const mockResponse = {
      profileObj: "test_profile",
      tokenObj: {
        access_token: "test_access_token",
        token_id: "test_token_id",
      },
    };

    it("should return successful action ", () => {
      const actualAction = action.authSuccessful(mockResponse);
      expect(actualAction).toEqual(expectedAction);
    });
  });
});
