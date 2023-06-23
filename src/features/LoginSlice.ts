/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store/Store';
import { TbArrowUp } from 'react-icons/tb';


export interface LoginFormData {
	email: string;
	password: string;
  }

export interface LoginState {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  formData: LoginFormData;
}

const initialState: LoginState = {
  isLoading: false,
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  error: null,
  formData: {
	email:'',
	password:''
  }
}

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
	  loginStart: (state) => {
		state.isLoading = true;
		state.error = null;
	  },
	  loginSuccess: (state) => {
		state.isLoading = false;
    state.isAuthenticated = true;
		state.error = null;
    localStorage.setItem('isAuthenticated', 'true');
  },
  loginFailure: (state, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.isAuthenticated = false;
		state.error = action.payload;
	  },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    },
	  updateFormData: (state, action: PayloadAction<Partial<LoginFormData>>) => {
		state.formData = {
		  ...state.formData,
		  ...action.payload,
		};
	  },
	},
  });

export const { loginStart, loginSuccess, loginFailure, updateFormData, logout } = loginSlice.actions;

export default loginSlice.reducer;

export const loginUser = (formData: LoginFormData): AppThunk => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await fetch('https://cool-backend-production.up.railway.app/api/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      dispatch(loginSuccess());
    } else {
      const errorData = await response.json();
      dispatch(loginFailure(errorData.message));
    }
  } catch (error) {
    dispatch(loginFailure('An error occurred during login.'));
  }
};
