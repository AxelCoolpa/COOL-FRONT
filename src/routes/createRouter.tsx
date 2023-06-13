import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/User/Home'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import { Admin } from '../layouts/Admin'
import Settings from '../pages/Admin/Settings'
import Dashboard from '../pages/Admin/Dashboard'
import { User } from '../layouts/User'
import Accomodation from '../pages/User/Accomodation'
import Adventure from '../pages/User/Adventure'
import Transport from '../pages/User/Transport'
import { Maps } from '../pages/User/Maps'
import Packages from '../pages/User/Packages'
import Tickets from '../pages/User/Tickets'
import Detail from '../pages/User/Detail'
import CreateDiscover from '../pages/ProvUser/CreateDiscover'
import ShowDiscover from '../pages/ProvUser/ShowDiscover'
import { ProvDashboard } from '../layouts/ProvDashboard'
import { ProvRegister } from '../layouts/ProvRegister'

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
				path: 'accomodation',
				element: <Accomodation />,
			},
			{
				path: 'adventure',
				element: <Adventure />,
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
		path: '/proveedor-admin',
		element: <ProvDashboard />,

		children: [
			{
				path: '',
				element: <ShowDiscover />,
			},
			{
				path: 'create',
				element: <CreateDiscover />,
			},
			{
				path: 'adventure',
				element: <Adventure />,
			},
		],
	},
	{
		path: '/proveedor-registro',
		element: <ProvRegister />,

		children: [
			{
				path: '',
				element: <CreateDiscover />, // cambiar element x el correspondiente archivo de ./pages/provUser/..
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
