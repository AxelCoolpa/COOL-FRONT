import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { createActivityAPI } from '../api/createActivityAPI'

import { toast } from 'react-hot-toast'

export interface createActiviyFormData {
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

interface createActiviyState {
	isLoading: boolean
	error: string | null
}

const initialState: createActiviyState = {
	isLoading: false,
	error: null,
}

const createActiviySlice = createSlice({
	name: 'createActiviy',
	initialState,
	reducers: {
		createActiviyStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		createActiviySuccess: (state) => {
			state.isLoading = false
		},
		createActiviyFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { createActiviyStart, createActiviySuccess, createActiviyFailure } =
	createActiviySlice.actions

export default createActiviySlice.reducer

export const createActiviy =
	(formData: createActiviyFormData, providerID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(createActiviyStart())

			// Simulate an asynchronous API call
			await createActivityAPI(formData, providerID)

			dispatch(createActiviySuccess())
			toast.success('Activity created successfully')
		} catch (error: any) {
			dispatch(createActiviyFailure(error.message))
			toast.error(error.message)
		}
	}
