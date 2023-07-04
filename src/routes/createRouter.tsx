import { createBrowserRouter } from 'react-router-dom'
import { User } from '../layouts/User'
import { Admin } from '../layouts/Admin'
import { Provider } from '../layouts/Provider'
import { ProvRegister } from '../layouts/ProvRegister'
import PrivateRoute from './PrivateRoute'

import Registerprovideer from '../pages/ProvUser/Register-provideer'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { admin, provider, user, PruebaAdminProvider } from './childrenRoutes'
import { AdminDash } from '../layouts/AdminDash'


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
				<Provider />
			</PrivateRoute>
		),
		children: provider,
	},
	{
		path: '/admindash',
		element: (
			<PrivateRoute>
				<AdminDash />
			</PrivateRoute>
		),
		children: PruebaAdminProvider
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
