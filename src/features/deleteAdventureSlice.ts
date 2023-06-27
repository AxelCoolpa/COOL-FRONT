import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { deleteDestinationAPI } from '../api/deleteDestination'

interface deleteAdventureState {
	isLoading: boolean
	error: string | null
}

const initialState: deleteAdventureState = {
	isLoading: false,
	error: null,
}

const deleteAdventureSlice = createSlice({
	name: 'deleteAdventure',
	initialState,
	reducers: {
		deleteAdventureStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		deleteAdventureSuccess: (state) => {
			state.isLoading = false
		},
		deleteAdventureFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { deleteAdventureStart, deleteAdventureSuccess, deleteAdventureFailure } =
	deleteAdventureSlice.actions

export const deleteAdventure =
	(destinationID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(deleteAdventureStart())

			// Simulate an asynchronous API call
			await deleteDestinationAPI(destinationID)

			dispatch(deleteAdventureSuccess())
		} catch (error: any) {
			dispatch(deleteAdventureFailure(error.message))
		}
	}

export default deleteAdventureSlice.reducer