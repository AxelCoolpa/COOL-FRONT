import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getDestinations } from '../api/getDestinations'
import { AppDispatch, RootState } from '../store/Store'

interface Destination {
	_id: string
	title: string
	description: string
	gallery: Array<string>
	individualPrice: string
	groupPrice: string
	categories: Array<string>
	location: string

	activities: string[]
	starterPack: string[]
	startTime: string[]
	endTime: string[]

	rating: Array<number>
	reviews: Array<string>
}

interface DestinationState {
	destinations: Destination[]
	loading: boolean
	error: string | null
}



const initialState: DestinationState = {
	destinations: [],
	loading: false,
	error: null,
}

const destinationSlice = createSlice({
	name: 'destination',
	initialState,
	reducers: {
		fetchDestinationsStart(state) {
			state.loading = true
			state.error = null
		},
		fetchDestinationsSuccess(state, action: PayloadAction<Destination[]>) {
			state.destinations = action.payload
			state.loading = false
			state.error = null
		},
		fetchDestinationsFailure(state, action: PayloadAction<string>) {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const {
	fetchDestinationsStart,
	fetchDestinationsSuccess,
	fetchDestinationsFailure,
} = destinationSlice.actions

export const fetchDestinations = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(fetchDestinationsStart())
			const destinations = await getDestinations()
			dispatch(fetchDestinationsSuccess(destinations))
		} catch (error) {
			if (error instanceof Error) {
				dispatch(fetchDestinationsFailure(error.message))
			}
		}
	}
}



export const selectDestinations = (state: RootState) => state.destination.destinations
export const selectLoading = (state: RootState) => state.destination.loading
export const selectError = (state: RootState) => state.destination.error

export default destinationSlice.reducer
