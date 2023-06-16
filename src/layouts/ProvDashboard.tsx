

//   MrTban, Marto


import SidebarProv from '../components/sidebar/sidebarProv'
import SidebarB from '../components/sidebar/SidebarProveedor'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import DashContainer2 from '../components/sections/dashContainer2'
import DashContainer from '../components/sections/dashContainer'
import Navbar from '../components/Navbars/AdminNavbar'

export const ProvDashboard = () => {
	return (
		<>
			<SidebarB />
			<DashContainer2>
				<Navbar />
				<div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
					<Outlet />
				</div>
			</DashContainer2>
		</>
	)
}

