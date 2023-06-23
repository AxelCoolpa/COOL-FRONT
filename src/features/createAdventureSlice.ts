import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { createAdventureAPI } from '../api/createAdventureAPI'

export interface createAdventureFormData {
	title: string
	description: string
	categories: string[]
	location: string
	individualPrice: string
	groupPrice: string
	gallery: []
	activities?: string[]
	starterPack?: string[]
	startTime?: string[]
	endTime?: string[]
	rating?: number[]
	reviews?: string[]
}

interface createAdventureState {
	isLoading: boolean
	error: string | null
}

const initialState: createAdventureState = {
	isLoading: false,
	error: null,
}

const createAdventureSlice = createSlice({
	name: 'createAdventure',
	initialState,
	reducers: {
		createAdventureStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		createAdventureSuccess: (state) => {
			state.isLoading = false
		},
		createAdventureFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { createAdventureStart, createAdventureSuccess, createAdventureFailure } =
	createAdventureSlice.actions

export default createAdventureSlice.reducer

export const createAdventure =
	(formData: createAdventureFormData, userID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(createAdventureStart())

			// Simulate an asynchronous API call
			await createAdventureAPI(formData, userID)

			dispatch(createAdventureSuccess())
		} catch (error: any) {
			dispatch(createAdventureFailure(error.message))
		}
	}
