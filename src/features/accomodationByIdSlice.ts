import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store/Store'
import { getAccomodationById } from '../api/getAccomodationById'

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

	itDeleted?: boolean
}

interface AccomodationByIdState {
	accomodation: Room[]
	loading: boolean
	error: string | null
}

const initialState: AccomodationByIdState = {
	accomodation: [],
	loading: false,
	error: null,
}

const accomodationByIdSlice = createSlice({
	name: 'accomodationById',
	initialState,
	reducers: {
		accomodationByIdStart(state) {
			state.loading = true
			state.error = null
		},
		accomodationByIdSuccess(state, action: PayloadAction<Room[]>) {
			state.accomodation = action.payload
			state.loading = false
			state.error = null
		},
		accomodationByIdFailure(state, action: PayloadAction<string>) {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { accomodationByIdStart, accomodationByIdSuccess, accomodationByIdFailure } =
	accomodationByIdSlice.actions

export default accomodationByIdSlice.reducer

export const accomodationById = (accomodationID: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(accomodationByIdStart())
			const accomodationById = await getAccomodationById(accomodationID)
			dispatch(accomodationByIdSuccess(accomodationById))
		} catch (error) {
			if (error instanceof Error) {
				dispatch(accomodationByIdFailure(error.message))
			}
		}
	}
}

export const selectAccomodationById = (state: RootState) =>
	state.accomodationById.accomodation
export const selectLoading = (state: RootState) => state.accomodationById.loading
export const selectError = (state: RootState) => state.accomodationById.error
