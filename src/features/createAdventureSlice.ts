import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { createAdventureAPI } from '../api/createAdventureAPI'

import { toast } from 'react-hot-toast'
export interface createAdventureFormData {
	title: string
	description: string
	galleryImage: string
	categories: string[]
	location: string
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
			toast.success('Destination created successfully')
		} catch (error: any) {
			dispatch(createAdventureFailure(error.message))
			toast.error('Something went wrong')
		}
	}
