import { Outlet } from 'react-router-dom'
import DashContainer2 from '../components/sections/dashContainer2'
import Navbar from '../components/Navbars/AdminNavbar'
import { useEffect } from 'react'
import { fetchDestinations } from '../features/destinationSlice'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../features/usersSlice'
import SidebarAdmin from '../components/sidebar/SidebarAdmin'

export const PRUEBAprovider = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDestinations())
		dispatch(fetchUsers())
	}, [dispatch])

	return (
		<>
			<SidebarAdmin />
			<DashContainer2>
				<Navbar />
				<div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-20 flex flex-wrap items-center justify-between w-full mx-auto'>
					<Outlet />
				</div>
			</DashContainer2>
		</>
	)
}
