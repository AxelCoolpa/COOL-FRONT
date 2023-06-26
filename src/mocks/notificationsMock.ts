import { HiOutlineBookmarkAlt, HiOutlineTicket } from 'react-icons/hi'
import { TbDiscount2 } from 'react-icons/tb'

export const notificacionsList = [
	{
		icon: HiOutlineTicket,
		title: 'Your ticket is ready',
		description: 'Your ticket is ready, check...',
		active: true,
	},
	{
		icon: TbDiscount2,
		title: 'Promo Traver',
		description: 'Get summer special promo...',
		active: false,
	},
	{
		icon: HiOutlineBookmarkAlt,
		title: 'Your Booking Success',
		description: 'You have been successfully book...',
		active: true,
	},
]
