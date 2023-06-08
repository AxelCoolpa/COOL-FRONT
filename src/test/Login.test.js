/* eslint-disable no-undef */
import { updateFormData, resetFormData } from "../features/LoginSlice";
import loginReducer from "../features/LoginSlice";

describe("loginSlice", () => {
  const initialState = {
    formData: {
      username: "",
      password: "",
    },
  };

  it("should handle updateFormData", () => {
    const newState = loginReducer(initialState, updateFormData({ username: "testuser" }));
    expect(newState.formData.username).toBe("testuser");
  });

  it("should handle resetFormData", () => {
    const updatedState = {
      formData: {
        username: "testuser",
        password: "testpassword",
      },
    };
    const newState = loginReducer(updatedState, resetFormData());
    expect(newState.formData.username).toBe("");
    expect(newState.formData.password).toBe("");
  });
});
