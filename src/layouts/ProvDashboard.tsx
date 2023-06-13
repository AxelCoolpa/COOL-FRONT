

//   MrTban, Marto


import React from 'react'
import SidebarB from '../components/sidebar/SidebarB'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import DashContainer from '../components/sections/dashContainer'

export const ProvDashboard = () => {
	return (
		<>
			<DashContainer>
				<Outlet />
			</DashContainer>
		</>
	)
}
