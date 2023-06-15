import { createSlice } from "@reduxjs/toolkit";
import { loginUserAPI } from '../api/loginAPI'
import { AppThunk } from "../store/Store";

export interface AuthFormData {
  email: string
  password: string
}



interface AuthState {
    formData: AuthFormData;
    isAuthenticated: boolean;
    isLoading: boolean
    error: string | null;
  }


const initialState: AuthState = {
  formData: {
		email: '',
		password: '',
	},
	  isLoading: false,     
    isAuthenticated: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateFormData: (state, action) => {
          state.formData = { ...state.formData, ...action.payload }
        },
        isAuthenticated: (state) => {
        state.isAuthenticated = true
      },
      loginFailure: (state, action) => {
        state.isLoading = false
        state.error = action.payload
      },
    },   
  });
  
  

export const {
    isAuthenticated,
    updateFormData,
    loginFailure
} = authSlice.actions

export default authSlice.reducer

export const checkAuthentication = (formData: AuthFormData): AppThunk => async (dispatch) => {
  try {
    dispatch(updateFormData)
    await loginUserAPI(formData)
    dispatch(isAuthenticated())
  } catch (error: any) {
    dispatch(loginFailure(error.message))
  }
}