import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { updateAdventureAPI } from '../api/updateAdventureAPI'

export interface updateAdventureFormData {
	title: string
	description: string
	categories: string[]
	location: string
	individualPrice: string
	groupPrice: string
	gallery: []

	rating?: number[]
	reviews?: string[]
}

interface updateAdventureState {
	isLoading: boolean
	error: string | null
}

const initialState: updateAdventureState = {
	isLoading: false,
	error: null,
}

const updateAdventureSlice = createSlice({
	name: 'updateAdventure',
	initialState,
	reducers: {
		updateAdventureStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		updateAdventureSuccess: (state) => {
			state.isLoading = false
		},
		updateAdventureFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { updateAdventureStart, updateAdventureSuccess, updateAdventureFailure } =
	updateAdventureSlice.actions

export default updateAdventureSlice.reducer

export const updateAdventure =
	(formData: updateAdventureFormData, userID: string, destinationID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(updateAdventureStart())

			// Simulate an asynchronous API call
			await updateAdventureAPI(formData, userID, destinationID)

			dispatch(updateAdventureSuccess())
		} catch (error: any) {
			dispatch(updateAdventureFailure(error.message))
		}
	}
