import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { updateAccomodationAPI } from '../api/updateAccomodationAPI'

import { toast } from 'react-hot-toast'

export interface updateAccomodationFormData {
	name?: string
	description?: string
	roomsCount?: number
	bedsCount?: number
	maxOccupancy?: number
	bathroomsCount?: number
	amenities?: string[]
	location?: string
	zone?: string[]
	images?: string[]
	startDate?: string
	endDate?: string
	price?: number
}

interface updateAccomodationState {
	isLoading: boolean
	error: string | null
}

const initialState: updateAccomodationState = {
	isLoading: false,
	error: null,
}

const updateAccomodationSlice = createSlice({
	name: 'updateAccomodation',
	initialState,
	reducers: {
		updateAccomodationStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		updateAccomodationSuccess: (state) => {
			state.isLoading = false
		},
		updateAccomodationFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const {
	updateAccomodationStart,
	updateAccomodationSuccess,
	updateAccomodationFailure,
} = updateAccomodationSlice.actions

export default updateAccomodationSlice.reducer

export const updateAccomodation =
	(
		formData: updateAccomodationFormData,
		providerID: string,
		accomodationID: string
	): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(updateAccomodationStart())

			// Simulate an asynchronous API call
			await updateAccomodationAPI(formData, providerID, accomodationID)

			dispatch(updateAccomodationSuccess())
			toast.success('Accomodation successfully updated')
		} catch (error: any) {
			dispatch(updateAccomodationFailure(error.message))
			toast.error('Something went wrong')
		}
	}
