import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import DashContainer from '../components/sections/dashContainer'

export const Admin = () => {
	return (
		<>
			<DashContainer>
				<Outlet />
			</DashContainer>
		</>
	)
}
