import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { ceateAdventureAPI } from '../api/CreateAdventure'

export interface createAdventureFormData {
	title: string
	description: string
	categories: string[]
	location: string
	groupPrice: string
	gallery: string[]
	rating: number[]
	individualPrice: string
	reviews: string[]
	extras: {
		activities: string
		starterPack: string
		startTime: string
		endTime: string
	}
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
	(formData: createAdventureFormData): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(createAdventureStart())

			// Simulate an asynchronous API call
			await ceateAdventureAPI(formData)

			dispatch(createAdventureSuccess())
		} catch (error: any) {
			dispatch(createAdventureFailure(error.message))
		}
	}
