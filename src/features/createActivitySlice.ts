import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { createActivityAPI } from '../api/createActivityAPI'

import { toast } from 'react-hot-toast'

export interface createActivityFormData {
	title: string
	description: string
	location: string
	galleryImage: []
	videoLink: string
	category: string[]
	individualPrice: string
	groupPrice: string
	idDestination: string

	starterPack: string
	startTime: string
	endTime: string

	rating?: number[]
	reviews?: string[]
}

interface createActivityState {
	isLoading: boolean
	error: string | null
}

const initialState: createActivityState = {
	isLoading: false,
	error: null,
}

const createActivitySlice = createSlice({
	name: 'createActivity',
	initialState,
	reducers: {
		createActivityStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		createActivitySuccess: (state) => {
			state.isLoading = false
		},
		createActivityFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { createActivityStart, createActivitySuccess, createActivityFailure } =
	createActivitySlice.actions

export default createActivitySlice.reducer

export const createActivity =
	(formData: createActivityFormData, providerID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(createActivityStart())

			// Simulate an asynchronous API call
			await createActivityAPI(formData, providerID)

			dispatch(createActivitySuccess())
			toast.success('Activity created successfully')
		} catch (error: any) {
			dispatch(createActivityFailure(error.message))
			toast.error('Something went wrong')
		}
	}
