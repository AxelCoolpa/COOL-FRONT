import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { deleteActivityAPI } from '../api/deleteActivity'

import { toast } from 'react-hot-toast'

interface deleteActivityState {
	isLoading: boolean
	error: string | null
}

const initialState: deleteActivityState = {
	isLoading: false,
	error: null,
}

const deleteActivitySlice = createSlice({
	name: 'deleteActivity',
	initialState,
	reducers: {
		deleteActivityStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		deleteActivitySuccess: (state) => {
			state.isLoading = false
		},
		deleteActivityFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { deleteActivityStart, deleteActivitySuccess, deleteActivityFailure } =
	deleteActivitySlice.actions

export const deleteActivity =
	(activityID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(deleteActivityStart())

			// Simulate an asynchronous API call
			await deleteActivityAPI(activityID)

			dispatch(deleteActivitySuccess())
			toast.success('Activity was successfully deleted')
		} catch (error: any) {
			dispatch(deleteActivityFailure(error.message))
			toast.error('Something went wrong')
		}
	}

export default deleteActivitySlice.reducer
