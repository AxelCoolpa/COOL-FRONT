import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import registerReducer from '../features/RegisterSlice'
import counterSlice from '../features/CreatedSlice'
import LoginSlice from '../features/LoginSlice'
import authSlice from '../features/authSlice'
import createAdventureSlice from '../features/createAdventureSlice'

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		register: registerReducer,
		login: LoginSlice,
		auth: authSlice,
		createAdventure: createAdventureSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
