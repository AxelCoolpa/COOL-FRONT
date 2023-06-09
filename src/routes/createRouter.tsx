import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/User/Home'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { Admin } from '../layouts/Admin'
import Settings from '../pages/Admin/Settings'
import Dashboard from '../pages/Admin/Dashboard'
import { User } from '../layouts/User'
import Acomodation from '../pages/User/Acomodation'
import Discover from '../pages/User/Discover'
import Transport from '../pages/User/Transport'
import { Maps } from '../pages/User/Maps'
import Packages from '../pages/User/Packages'
import Tickets from '../pages/User/Tickets'
import Detail from '../pages/User/Detail'

export const router = createBrowserRouter([
	{
		path: '/admin',
		element: <Admin />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: 'settings',
				element: <Settings />,
			},
		],
	},
	{
		path: '/',
		element: <User />,

		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'acomodation',
				element: <Acomodation />,
			},
			{
				path: 'discover',
				element: <Discover />,
			},
			{
				path: 'transport',
				element: <Transport />,
			},
			{
				path: 'maps',
				element: <Maps />,
			},
			{
				path: 'packages',
				element: <Packages />,
			},
			{
				path: 'tickets',
				element: <Tickets />,
			},
			{
				path: 'details/:id',
				element: <Detail />,
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
