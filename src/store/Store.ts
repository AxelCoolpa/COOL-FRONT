import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import registerReducer from '../features/RegisterSlice'
import counterSlice from '../features/CreatedSlice'
import LoginSlice from '../features/LoginSlice'
import authSlice from '../features/authSlice'
import createAdventureSlice from '../features/createAdventureSlice'
import destinationSlice from '../features/destinationSlice'
import usersSlice from '../features/usersSlice'
import destinationsByIdSlice from '../features/destinationByIdSlice'
import userByIdSlice from '../features/userByIdSlice'
import deleteAdventureSlice from '../features/deleteAdventureSlice'
import updateAdventureSlice from '../features/updateAdventureSlice'
import createActiviySlice from '../features/createActivitySlice'
import updateActivitySlice from '../features/updateActivitySlice'
import deleteActivitySlice from '../features/deleteActivitySlice'
import activitiesSlice from '../features/activitiesSlice'
import activityByIdSlice from '../features/activityByIdSlice'
import updateUserSlice from '../features/updateUserSlice'
import rooms from '../features/rooms'

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		register: registerReducer,
		login: LoginSlice,
		auth: authSlice,
		//* Users
		user: usersSlice,
		userById: userByIdSlice,
		updateUser: updateUserSlice,
		//* Destinations
		destination: destinationSlice,
		destinationById: destinationsByIdSlice,
		createAdventure: createAdventureSlice,
		updateAdventure: updateAdventureSlice,
		deleteAdventure: deleteAdventureSlice,
		//* Activity
		activities: activitiesSlice,
		activityById: activityByIdSlice,
		createActivity: createActiviySlice,
		updateActivity: updateActivitySlice,
		deleteActivity: deleteActivitySlice,
		//* Accomodation
		rooms
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
