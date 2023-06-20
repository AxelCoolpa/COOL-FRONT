import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { RegisterFormData } from '../components/Register'

interface RegisterState {
  isLoading: boolean
  error: string | null
}

const initialState: RegisterState = {
  isLoading: false,
  error: null,
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    registerSuccess: (state) => {
      state.isLoading = false
      state.error = null
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions

export default registerSlice.reducer

export const registerUser = (formData: RegisterFormData): AppThunk => async (dispatch) => {
  try {
    dispatch(registerStart())

    const response = await fetch('https://cool-backend-production.up.railway.app/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      dispatch(registerSuccess())
    } else {
      const errorData = await response.json()
      dispatch(registerFailure(errorData.message))
    }
  } catch (error) {
    dispatch(registerFailure('An error occurred during registration.'))
  }
}
