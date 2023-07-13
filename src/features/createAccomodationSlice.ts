import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store/Store'
import { createAccomodationAPI } from '../api/createAccomodationAPI'

import { toast } from 'react-hot-toast'

export interface createAccomodationFormData {
	name: string
	description: string
	roomsCount: number
	bedsCount: number
	maxOccupancy: number
	bathRoomsCount: number
	amenities: string[]
	location: string
	zone: string[]
	images: string[]
	startDate: string
	endDate: string
	price: number
	idDestination: string
	category: string
}

interface createAccomodationState {
	isLoading: boolean
	error: string | null
}

const initialState: createAccomodationState = {
	isLoading: false,
	error: null,
}

const createAccomodationSlice = createSlice({
	name: 'createAccomodation',
	initialState,
	reducers: {
		createAccomodationStart: (state) => {
			state.isLoading = true
			state.error = null
		},
		createAccomodationSuccess: (state) => {
			state.isLoading = false
		},
		createAccomodationFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const {
	createAccomodationStart,
	createAccomodationSuccess,
	createAccomodationFailure,
} = createAccomodationSlice.actions

export default createAccomodationSlice.reducer

export const createAccomodation =
	(formData: createAccomodationFormData, providerID: string): AppThunk =>
	async (dispatch) => {
		try {
			dispatch(createAccomodationStart())

			// Simulate an asynchronous API call
			await createAccomodationAPI(formData, providerID)

			dispatch(createAccomodationSuccess())
			toast.success('Accomodation created successfully')
		} catch (error: any) {
			dispatch(createAccomodationFailure(error.message))
			toast.error('Something went wrong')
		}
	}
