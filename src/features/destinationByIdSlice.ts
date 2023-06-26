import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getDestinationById } from '../api/getDestinationById'
import { AppDispatch, RootState } from '../store/Store'

interface DestinationById {
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

	rating?: Array<number>
	reviews?: Array<string>
}

interface DestinationByIdState {
	destination: DestinationById[]
	loading: boolean
	error: string | null
}

const initialState: DestinationByIdState = {
	destination: [],
	loading: false,
	error: null,
}

const destinationByIdSlice = createSlice({
	name: 'destinationById',
	initialState,
	reducers: {
		destinationByIdStart(state) {
			state.loading = true
			state.error = null
		},
		destinationByIdSuccess(state, action: PayloadAction<DestinationById[]>) {
			state.destination = action.payload
			state.loading = false
			state.error = null
		},
		destinationByIdFailure(state, action: PayloadAction<string>) {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { destinationByIdStart, destinationByIdSuccess, destinationByIdFailure } =
	destinationByIdSlice.actions

export default destinationByIdSlice.reducer

export const destinationById = (destinationID: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(destinationByIdStart())
			const destinationById = await getDestinationById(destinationID)
			dispatch(destinationByIdSuccess(destinationById))
		} catch (error) {
			if (error instanceof Error) {
				dispatch(destinationByIdFailure(error.message))
			}
		}
	}
}

export const selectDestinationById = (state: RootState) =>
	state.destinationById.destination
export const selectLoading = (state: RootState) => state.destinationById.loading
export const selectError = (state: RootState) => state.destinationById.error
