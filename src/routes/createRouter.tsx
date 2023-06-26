import { createBrowserRouter } from 'react-router-dom'
import { User } from '../layouts/User'
import { Admin } from '../layouts/Admin'
import { ProvDashboard } from '../layouts/ProvDashboard'
import { ProvRegister } from '../layouts/ProvRegister'
import PrivateRoute from './PrivateRoute'

import Home from '../pages/User/Home'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Settings from '../pages/Admin/Settings'
import Dashboard from '../pages/Admin/Dashboard'
import Accomodation from '../pages/User/Accomodation'
import Adventure from '../pages/User/Adventure'
import Transport from '../pages/User/Transport'
import { Maps } from '../pages/User/Maps'
import Packages from '../pages/User/Packages'
import TableUser from '../pages/ProvUser/TableUser'
import Tickets from '../pages/User/Tickets'
import Detail from '../pages/User/Detail'
import CreateDiscover from '../pages/ProvUser/CreateDiscover'
import ShowDiscover from '../pages/ProvUser/ShowDiscover'
import Registerprovideer from '../pages/ProvUser/Register-provideer'
import UpdateDiscover from '../pages/ProvUser/UpdateDiscover'
//import UpdateAdventure from '../pages/ProvUser/UpdateAdventure'
import ProfileProvider from '../pages/ProvUser/Profile'
import ProfileUser from '../pages/User/Profile'

const admin = [
	{
		path: '',
		element: <Dashboard />,
	},
	{
		path: 'settings',
		element: <Settings />,
	},
]
const provider = [
	{
		path: '',
		element: <ShowDiscover />,
	},
	{
		path: 'create',
		element: <CreateDiscover />,
	},
	{
		path: 'update/:id',
		element: <UpdateDiscover />,
	},
	{
		path: 'adventure',
		element: <Adventure />,
	},
	{
		path: 'clients',
		element: <TableUser />,
	},
	{
		path: 'profile',
		element: <ProfileProvider />,
	},
]
const user = [
	{
		path: '',
		element: <Home />,
	},
	{
		path: 'adventure',
		element: <Adventure />,
	},
	{
		path: 'details/:id',
		element: <Detail />,
	},
	{
		path: 'accomodation',
		element: <Accomodation />,
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
		path: 'profile',
		element: <ProfileUser />,
	},
]

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
