import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import SidebarB from '../components/sidebar/SidebarProveedor'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Admin/Dashboard'
import Settings from '../pages/Admin/Settings'
import DashContainer from '../components/sections/dashContainer'

export const Admin = () => {
	return (
		<>
			<SideBar />
			<DashContainer>
				<Outlet />
			</DashContainer>
		</>
	)
}
