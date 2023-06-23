import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  userRole: string;
}

const initialState: AuthState = {   
    isAuthenticated: false,
    userRole: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<{ roleName: string }>) => {
        state.isAuthenticated = true;
        //state.userRole = action.payload.roleName;
      },
      removeUser: (state) => {
        state.isAuthenticated = false;
        state.userRole = '';
      },
    },   
  });
  
  

export const {
    setUser,
    removeUser,
} = authSlice.actions

export default authSlice.reducer