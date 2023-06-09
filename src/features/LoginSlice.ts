import { createSlice } from "@reduxjs/toolkit";
import { loginUserAPI } from "../api/loginAPI";
import { AppThunk } from "../store/Store";

export interface LoginFormData {
  username: string;
  password: string;
}

interface LoginState {
  formData: LoginFormData;
  isLoading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  formData: {
    username: "",
    password: "",
  },
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = { username: "", password: "" };
    },
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateFormData,
  resetFormData,
  loginStart,
  loginSuccess,
  loginFailure,
} = loginSlice.actions;

export default loginSlice.reducer;

export const loginUser = (formData: LoginFormData): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(loginStart());

    // Simulate an asynchronous API call
    await loginUserAPI(formData);

    dispatch(loginSuccess());
  } catch (error: any) {
    dispatch(loginFailure(error.message));
  }
};
