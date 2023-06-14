

//   MrTban, Marto


import SidebarProv from '../components/sidebar/sidebarProv'
import SidebarB from '../components/sidebar/SidebarB'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import DashContainer from '../components/sections/dashContainer'
import Navbar from '../components/Navbars/AdminNavbar'

export const ProvDashboard = () => {
	return (
		<>
		<SidebarB />
			<DashContainer>
				<Navbar />
				<div className='px-4 md:px-10 mx-auto w-full -m-24'>
					<Outlet />
				</div>
			</DashContainer>
		</>
	)
}

