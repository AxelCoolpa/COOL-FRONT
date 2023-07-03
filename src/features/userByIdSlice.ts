import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getUserByIdAPI } from '../api/getUserById'
import { AppDispatch, RootState } from '../store/Store'

export interface UserById {
	_id?: string
	username: string
	email: string
	firstName: string
	lastname: string
	avatar: string

	//* Contact information
	phone: string
	DNI: string
	location: string
	// address?: string
	// city?: string
	// country?: string
	// ZIP?: number
	description: string

	role?: {
		roleName?: string
	}
}

interface UserByIdState {
	user: UserById[]
	loading: boolean
	error: string | null
}

const initialState: UserByIdState = {
	user: [],
	loading: false,
	error: null,
}

const userByIdSlice = createSlice({
	name: 'userById',
	initialState,
	reducers: {
		userByIdStart(state) {
			state.loading = true
			state.error = null
		},
		userByIdSuccess(state, action: PayloadAction<UserByIdState[]>) {
			state.user = action.payload
			state.loading = false
			state.error = null
		},
		userByIdFailure(state, action: PayloadAction<string>) {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { userByIdStart, userByIdSuccess, userByIdFailure } = userByIdSlice.actions

export const userById = (userID: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(userByIdStart())
			const userById = await getUserByIdAPI(userID)
			dispatch(userByIdSuccess(userById))
		} catch (error) {
			if (error instanceof Error) {
				dispatch(userByIdFailure(error.message))
			}
		}
	}
}

export const selectUserById = (state: RootState) => state.userById.user
export const selectLoading = (state: RootState) => state.userById.loading
export const selectError = (state: RootState) => state.userById.error

export default userByIdSlice.reducer
