import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getDestinations } from '../api/getDestinations'
import { AppDispatch, RootState } from '../store/Store'

interface Activities {
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

interface ActivitiesState {
	activities: Activities[]
	loading: boolean
	error: string | null
}

const initialState: ActivitiesState = {
	activities: [],
	loading: false,
	error: null,
}

const activitiesSlice = createSlice({
	name: 'activities',
	initialState,
	reducers: {
		activitiesStart(state) {
			state.loading = true
			state.error = null
		},
		activitiesSuccess(state, action: PayloadAction<Activities[]>) {
			state.activities = action.payload
			state.loading = false
			state.error = null
		},
		activitiesFailure(state, action: PayloadAction<string>) {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { activitiesStart, activitiesSuccess, activitiesFailure } =
	activitiesSlice.actions

export const activities = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(activitiesStart())
			const activities = await getDestinations()
			dispatch(activitiesSuccess(activities))
		} catch (error) {
			if (error instanceof Error) {
				dispatch(activitiesFailure(error.message))
			}
		}
	}
}

export const selectActivities = (state: RootState) => state.activities.activities
export const selectLoading = (state: RootState) => state.destination.loading
export const selectError = (state: RootState) => state.destination.error

export default activitiesSlice.reducer
