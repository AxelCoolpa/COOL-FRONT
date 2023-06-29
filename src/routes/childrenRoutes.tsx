import Home from '../pages/User/Home'
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
import UpdateDiscover from '../pages/ProvUser/UpdateDiscover'
//import UpdateAdventure from '../pages/ProvUser/UpdateAdventure'
import ProfileProvider from '../pages/ProvUser/Profile'
import SettingsUser from '../pages/User/Settings'
import ProfileUser from '../pages/User/Profile'
import Notifications from '../pages/User/Notifications'

export const admin = [
	{
		path: '',
		element: <Dashboard />,
	},
	{
		path: 'settings',
		element: <Settings />,
	},
]
export const provider = [
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
export const PruebaProvider = [
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
export const user = [
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
		element: <SettingsUser />,
	},
	{
		path: 'profile/:id',
		element: <ProfileUser />,
	},
	{
		path: 'notifications/:id',
		element: <Notifications />,
	},
]
