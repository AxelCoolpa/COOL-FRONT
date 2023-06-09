import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    logout: boolean;
    error: string | null;
  }


const initialState: AuthState = {
    isAuthenticated: false,
    logout: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        isAuthenticated: (state) => {
        state.isAuthenticated = true
      },
        logOut: (state) => {
        state.isAuthenticated = true 
    },
    },   
  });
  
  

export const {
    isAuthenticated,
    logout
} = authSlice.actions