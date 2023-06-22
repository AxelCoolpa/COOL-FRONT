import { Outlet } from 'react-router-dom'

import SideBar from '../components/sidebar/SideBar'
import DashContainer from '../components/sections/dashContainer'
import { useEffect } from 'react'
import { fetchDestinations } from '../features/destinationSlice'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../features/usersSlice'

export const User = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDestinations())
		dispatch(fetchUsers())
	}, [])
	return (
		<>
			<SideBar />
			<DashContainer>
				<Outlet />
			</DashContainer>
		</>
	)
}
