import { Outlet } from 'react-router-dom'
import DashContainer2 from '../components/sections/dashContainer2'
import Navbar from '../components/Navbars/ProviderNavbar'
import { useEffect } from 'react'
import { fetchDestinations } from '../features/destinationSlice'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../features/usersSlice'
import SidebarProvider from '../components/sidebar/SidebarProvider'
import { activities } from '../features/activitiesSlice'
import { accomodation } from '../features/accomodationSlice'

export const Provider = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchDestinations())
		dispatch(activities())
		dispatch(accomodation())
		dispatch(fetchUsers())
	}, [dispatch])
	return (
		<>
			<SidebarProvider />
			<DashContainer2>
				<Navbar />
				<div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
					<Outlet />
				</div>
			</DashContainer2>
		</>
	)
}
