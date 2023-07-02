import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { updateActivityAPI } from '../api/updateActivityAPI'

import { toast } from 'react-hot-toast'

export interface updateActivityFormData {
	title: string
	description: string
	categories: string[]
	location: string
	individualPrice: string
	groupPrice: string
	gallery: []

	activities: string[]
	starterPack: string[]
	startTime: string[]
	endTime: string[]

	rating?: number[]
	reviews?: string[]
}

interface updateActivityState {
	isLoading: boolean
	error: string | null
}

const initialState: updateActivityState = {
	isLoading: false,
	error: null,
}

const updateActivitySlice = createSlice({
	name: 'updateActivity',
	initialState,
	reducers: {
		updateActivityStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		updateActivitySuccess: (state) => {
			state.isLoading = false
		},
		updateActivityFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { updateActivityStart, updateActivitySuccess, updateActivityFailure } =
	updateActivitySlice.actions

export default updateActivitySlice.reducer

export const updateActivity =
	(formData: updateActivityFormData, providerID: string, activityID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(updateActivityStart())

			// Simulate an asynchronous API call
			await updateActivityAPI(formData, providerID, activityID)

			dispatch(updateActivitySuccess())
			toast.success('Activity successfully updated')
		} catch (error: any) {
			dispatch(updateActivityFailure(error.message))
			toast.error('Something went wrong')
		}
	}
