import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store/Store'
import { getActivityById } from '../api/getActivityById'

interface ActivityById {
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

interface ActivityByIdState {
	activity: ActivityById[]
	loading: boolean
	error: string | null
}

const initialState: ActivityByIdState = {
	activity: [],
	loading: false,
	error: null,
}

const activityByIdSlice = createSlice({
	name: 'activityById',
	initialState,
	reducers: {
		activityByIdStart(state) {
			state.loading = true
			state.error = null
		},
		activityByIdSuccess(state, action: PayloadAction<ActivityById[]>) {
			state.activity = action.payload
			state.loading = false
			state.error = null
		},
		activityByIdFailure(state, action: PayloadAction<string>) {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { activityByIdStart, activityByIdSuccess, activityByIdFailure } =
	activityByIdSlice.actions

export default activityByIdSlice.reducer

export const activityById = (activityID: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(activityByIdStart())
			const activityById = await getActivityById(activityID)
			dispatch(activityByIdSuccess(activityById))
		} catch (error) {
			if (error instanceof Error) {
				dispatch(activityByIdFailure(error.message))
			}
		}
	}
}

export const selectDestinationById = (state: RootState) => state.activityById.activity
export const selectLoading = (state: RootState) => state.activityById.loading
export const selectError = (state: RootState) => state.activityById.error
