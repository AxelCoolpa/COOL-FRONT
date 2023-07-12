import { LuThermometerSnowflake } from 'react-icons/lu'
import { MdLocalBar, MdPedalBike, MdPool, MdRestaurantMenu, MdSpa } from 'react-icons/md'
import { RiCarFill } from 'react-icons/ri'
import { TbWifi } from 'react-icons/tb'

export const amenitiesCategories = [
	{
		label: 'Wifi',
		icon: TbWifi,
		bgColor: '#d7f7cb',
		iconColor: '#5ece2a',
	},
	{
		label: 'Restaurant',
		icon: MdRestaurantMenu,
		bgColor: '#f7f0cb',
		iconColor: '#f0c452',
	},
	{
		label: 'Pool',
		icon: MdPool,
		bgColor: '#ccdffd',
		iconColor: '#0060e4',
	},
	{
		label: 'Parking',
		icon: RiCarFill,
		bgColor: '#d5ccfd',
		iconColor: '#6f4df6',
	},
	{
		label: 'AC',
		icon: LuThermometerSnowflake,
		bgColor: '#e6ebff',
		iconColor: '#339dff',
	},
	{
		label: 'SPA',
		icon: MdSpa,
		bgColor: '#c60075',
		iconColor: '#ff0096',
	},
	{
		label: 'Cocktail Sets',
		icon: MdLocalBar,
		bgColor: '#ff892b',
		iconColor: '#e65627',
	},
	{
		label: 'Bikes',
		icon: MdPedalBike,
		bgColor: '#ff4c4c',
		iconColor: '#f20b0a',
	},
]
