import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { deleteAccomodationAPI } from '../api/deleteAccomodation'

import { toast } from 'react-hot-toast'

interface deleteAccomodationState {
	isLoading: boolean
	error: string | null
}

const initialState: deleteAccomodationState = {
	isLoading: false,
	error: null,
}

const deleteAccomodationSlice = createSlice({
	name: 'deleteAccomodation',
	initialState,
	reducers: {
		deleteAccomodationStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		deleteAccomodationSuccess: (state) => {
			state.isLoading = false
		},
		deleteAccomodationFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const {
	deleteAccomodationStart,
	deleteAccomodationSuccess,
	deleteAccomodationFailure,
} = deleteAccomodationSlice.actions

export const deleteAccomodation =
	(accomodationID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(deleteAccomodationStart())

			// Simulate an asynchronous API call
			await deleteAccomodationAPI(accomodationID)

			dispatch(deleteAccomodationSuccess())
			toast.success('Accomodation was successfully deleted')
		} catch (error: any) {
			dispatch(deleteAccomodationFailure(error.message))
			toast.error('Something went wrong')
		}
	}

export default deleteAccomodationSlice.reducer
