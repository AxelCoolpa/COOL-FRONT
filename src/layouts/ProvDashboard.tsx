

//   MrTban, Marto


import SidebarProv from '../components/sidebar/sidebarProv'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import DashContainer from '../components/sections/dashContainer'

export const ProvDashboard = () => {
	return (
		<>
		<SidebarProv />
			<DashContainer>
				<Outlet />
			</DashContainer>
		</>
	)
}
