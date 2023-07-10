import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { deleteUserAPI } from '../api/deleteUser'

import { toast } from 'react-hot-toast'

interface deleteUserState {
	isLoading: boolean
	error: string | null
}

const initialState: deleteUserState = {
	isLoading: false,
	error: null,
}

const deleteUserSlice = createSlice({
	name: 'deleteUser',
	initialState,
	reducers: {
		deleteUserStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		deleteUserSuccess: (state) => {
			state.isLoading = false
		},
		deleteUserFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { deleteUserStart, deleteUserSuccess, deleteUserFailure } =
	deleteUserSlice.actions

export const deleteUser =
	(userID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(deleteUserStart())

			// Simulate an asynchronous API call
			await deleteUserAPI(userID)

			dispatch(deleteUserSuccess())
			toast.success('User deleted successfully')
		} catch (error: any) {
			dispatch(deleteUserFailure(error.message))
			toast.error('Something went wrong')
		}
	}

export default deleteUserSlice.reducer
