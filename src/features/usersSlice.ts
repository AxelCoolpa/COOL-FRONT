import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getUsersAPI } from '../api/getUsers'
import { AppDispatch, RootState } from '../store/Store'

interface Users {
	_id?: string
	username?: string
	email?: string
}

interface UsersState {
	users: Users[]
	loading: boolean
	error: string | null
}

const initialState: UsersState = {
	users: [],
	loading: false,
	error: null,
}

const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		usersStart(state) {
			state.loading = true
			state.error = null
		},
		usersSuccess(state, action: PayloadAction<Users[]>) {
			state.users = action.payload
			state.loading = false
			state.error = null
		},
		usersFailure(state, action: PayloadAction<string>) {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { usersStart, usersSuccess, usersFailure } = usersSlice.actions

export const fetchUsers = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(usersStart())
			const destinations = await getUsersAPI()
			dispatch(usersSuccess(destinations))
		} catch (error) {
			if (error instanceof Error) {
				dispatch(usersFailure(error.message))
			}
		}
	}
}

export const selectUsers = (state: RootState) => state.user.users
export const selectLoading = (state: RootState) => state.user.loading
export const selectError = (state: RootState) => state.user.error

export default usersSlice.reducer
