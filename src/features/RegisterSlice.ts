import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store/Store";
//import { registerUserAPI } from "../api/registerAPI";

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterState {
  isLoading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  isLoading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  registerSlice.actions;

export default registerSlice.reducer;

export const registerUser = (formData: RegisterFormData): AppThunk => async (
  dispatch
) => {
  try {
    //dispatch(registerStart());

    // Simulate an asynchronous API call
    //await registerUserAPI(formData);

    //dispatch(registerSuccess());
  } catch (error) {
    //dispatch(registerFailure(error.message));
  }
};
