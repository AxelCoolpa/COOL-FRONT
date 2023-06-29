import { createBrowserRouter } from 'react-router-dom'
import { User } from '../layouts/User'
import { Admin } from '../layouts/Admin'
import { ProvDashboard } from '../layouts/ProvDashboard'
import { ProvRegister } from '../layouts/ProvRegister'
import PrivateRoute from './PrivateRoute'

import Registerprovideer from '../pages/ProvUser/Register-provideer'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { admin, provider, user, PruebaProvider } from './childrenRoutes'
import { PRUEBAprovider } from '../layouts/PRUEBAprovider'


export const router = createBrowserRouter([
	{
		path: '/admin',
		element: (
			<PrivateRoute>
				<Admin />
			</PrivateRoute>
		),
		children: admin,
	},
	{
		path: '/',
		element: (
			<PrivateRoute>
				<User />
			</PrivateRoute>
		),
		children: user,
	},
	{
		path: '/provider',
		element: (
			<PrivateRoute>
				<ProvDashboard />
			</PrivateRoute>
		),
		children: provider,
	},
	{
		path: '/PRUEBAprovider',
		element: (
			<PrivateRoute>
				<PRUEBAprovider />
			</PrivateRoute>
		),
		children: PruebaProvider
	},
	{
		path: '/proveedor-registro',
		element: <ProvRegister />,

		children: [
			{
				path: '',
				element: <Registerprovideer />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
])
