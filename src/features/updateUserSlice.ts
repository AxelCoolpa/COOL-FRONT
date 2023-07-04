import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { updateUserAPI } from '../api/updateUserAPI'

import { toast } from 'react-hot-toast'

export interface updateUserFormData {
	username: string
	email: string
	avatar: []
	firstName: string
	lastname: string
	DNI: string
	phone: string
	location: string
	// address?: string
	// city?: string
	description: string
}

interface updateUserState {
	isLoading: boolean
	error: string | null
}

const initialState: updateUserState = {
	isLoading: false,
	error: null,
}

const updateUserSlice = createSlice({
	name: 'updateUser',
	initialState,
	reducers: {
		updateUserStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		updateUserSuccess: (state) => {
			state.isLoading = false
		},
		updateUserFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { updateUserStart, updateUserSuccess, updateUserFailure } =
	updateUserSlice.actions

export default updateUserSlice.reducer

export const updateUser =
	(formData: updateUserFormData, userID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(updateUserStart())

			// Simulate an asynchronous API call
			await updateUserAPI(formData, userID)

			dispatch(updateUserSuccess())
			toast.success('Profile updated successfully')
		} catch (error: any) {
			dispatch(updateUserFailure(error.message))
			toast.error('Something went wrong')
		}
	}
