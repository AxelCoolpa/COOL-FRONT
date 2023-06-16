import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { ceateAdventureAPI } from '../api/CreateAdventure'

export interface createAdventueFormData {
	username: string
	email: string
	password: string
	confirmPassword: string
}

interface createAdventueState {
	isLoading: boolean
	error: string | null
}

const initialState: createAdventueState = {
	isLoading: false,
	error: null,
}

const createAdventueSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		createAdventueStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		createAdventueSuccess: (state) => {
			state.isLoading = false
		},
		createAdventueFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { createAdventueStart, createAdventueSuccess, createAdventueFailure } =
	createAdventueSlice.actions

export default createAdventueSlice.reducer

export const registerUser =
	(formData: createAdventueFormData): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(createAdventueStart())

			// Simulate an asynchronous API call
			await ceateAdventureAPI(formData)

			dispatch(createAdventueSuccess())
		} catch (error: any) {
			dispatch(createAdventueFailure(error.message))
		}
	}
