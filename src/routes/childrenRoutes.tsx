//* USER
import Home from '../pages/User/Home'
import Adventure from '../pages/User/Adventure'
import Detail from '../pages/User/Detail'
import Packages from '../pages/User/Packages'
import Transport from '../pages/User/Transport'
import Accomodation from '../pages/User/Accomodation'
import Tickets from '../pages/User/Tickets'
import { Maps } from '../pages/User/Maps'
import SettingsUser from '../pages/User/Settings'
import ProfileUser from '../pages/User/Profile'
import Notifications from '../pages/User/Notifications'

//* PROVIDER
import ShowActivities from '../pages/ProvUser/ShowActivities'
import CreateActivity from '../pages/ProvUser/CreateActivity'
import Update from '../pages/ProvUser/Update'
import ProfileProvider from '../pages/ProvUser/Profile'
import TableUser from '../pages/ProvUser/TableUser'
import CreateAccomodation from '../pages/ProvUser/CreateAccomodation'
import CreateLogistic from '../pages/ProvUser/CreateLogistic'

//* ADMIN
import Dashboard from '../pages/Admin/Dashboard'
import ShowAdventures from '../pages/Admin/ShowAdventures'
import CreateAdventure from '../pages/Admin/CreateAdventure'
import UpdateAdventure from '../pages/Admin/UpdateAdventure'
import AdminTableUser from '../pages/Admin/AdminTableUser'
import AdminProfile from '../pages/Admin/AdminProfile'
import Settings from '../pages/Admin/Settings'
import PruebaHome from '../pages/ProvUser/pruebaHome'

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
		element: <ShowActivities />,
	},
	{
		path: 'create/activity',
		element: <CreateActivity />,
	},
	{
		path: 'create/accomodation',
		element: <CreateAccomodation />,
	},
	{
		path: 'create/logistic',
		element: <CreateLogistic />,
	},
	{
		path: 'update/:id',
		element: <Update />,
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
export const PruebaAdminProvider = [
	{
		path: '',
		element: <ShowAdventures />,
	},
	{
		path: 'create',
		element: <CreateAdventure />,
	},
	{
		path: 'update/:id',
		element: <UpdateAdventure />,
	},
	{
		path: 'clients',
		element: <AdminTableUser />,
	},
	{
		path: 'profile',
		element: <AdminProfile />,
	},
	{
		path: 'home',
		element: <PruebaHome />,
	},
]
export const user = [
	{
		path: '',
		element: <Home />,
	},
	{
		path: 'adventures',
		element: <Adventure />,
	},
	{
		path: 'packages',
		element: <Packages />,
	},
	{
		path: 'transport',
		element: <Transport />,
	},
	{
		path: 'accomodation',
		element: <Accomodation />,
	},
	{
		path: 'tickets',
		element: <Tickets />,
	},
	{
		path: 'maps',
		element: <Maps />,
	},
	/* {
		path: 'homebug',
		element: <HomeUser />,
	}, */
	{
		path: 'create',
		element: <CreateAdventure />,
	},
	{
		path: 'details/:id',
		element: <Detail />,
	},
	{
		path: '/profile',
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
