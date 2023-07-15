import { GiCampingTent } from 'react-icons/gi'
import { LuHotel } from 'react-icons/lu'
import { MdOutlineCottage, MdOutlineVilla } from 'react-icons/md'
import { TbBeach } from 'react-icons/tb'

export const accomodationCategories = [
	{
		label: 'Hotel',
		icon: LuHotel,
		bgColor: '#d7f7cb',
		iconColor: '#5ece2a',
	},
	{
		label: 'Cottage',
		icon: MdOutlineCottage,
		bgColor: '#f7f0cb',
		iconColor: '#f0c452',
	},
	{
		label: 'Resort',
		icon: TbBeach,
		bgColor: '#ccdffd',
		iconColor: '#0060e4',
	},
	{
		label: 'Camping Area',
		icon: GiCampingTent,
		bgColor: '#d5ccfd',
		iconColor: '#6f4df6',
	},
	{
		label: 'House',
		icon: MdOutlineVilla,
		bgColor: '#e6ebff',
		iconColor: '#339dff',
	},
]
