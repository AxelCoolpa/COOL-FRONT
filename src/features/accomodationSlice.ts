import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store/Store'
import { getAccomodations } from '../api/getAccomodations'

interface Room {
	_id: string
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
	category: string

	providerId: string
	itDeleted: boolean
}

interface AccomodationState {
	accomodation: Room[]
	loading: boolean
	error: string | null
}

const initialState: AccomodationState = {
	accomodation: [],
	loading: false,
	error: null,
}

const accomodationSlice = createSlice({
	name: 'accomodation',
	initialState,
	reducers: {
		accomodationStart(state) {
			state.loading = true
			state.error = null
		},
		accomodationSuccess(state, action: PayloadAction<Room[]>) {
			state.accomodation = action.payload
			state.loading = false
			state.error = null
		},
		accomodationFailure(state, action: PayloadAction<string>) {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { accomodationStart, accomodationSuccess, accomodationFailure } =
	accomodationSlice.actions

export const accomodation = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(accomodationStart())
			const accomodation = await getAccomodations()
			dispatch(accomodationSuccess(accomodation))
		} catch (error) {
			if (error instanceof Error) {
				dispatch(accomodationFailure(error.message))
			}
		}
	}
}

export const selectAccomodation = (state: RootState) => state.accomodation.accomodation
export const selectLoading = (state: RootState) => state.destination.loading
export const selectError = (state: RootState) => state.destination.error

export default accomodationSlice.reducer
