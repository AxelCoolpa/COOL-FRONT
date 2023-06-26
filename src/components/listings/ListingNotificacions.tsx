import React from 'react'

import { IconType } from 'react-icons'
import { BsDot } from 'react-icons/bs'

interface Props {
	icon: IconType
	title: string
	description: string
	active?: boolean
}

const ListingNotificacions: React.FC<Props> = ({
	icon: Icon,
	title,
	description,
	active,
}) => {
	return (
		<div className='flex items-center gap-7'>
			<span className='relative w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center'>
				{active && (
					<div>
						<BsDot size={55} className='absolute text-OrangeCooL -top-4 -right-5' />
					</div>
				)}
				<Icon size={30} className='text-yellow-500' />
			</span>
			<div>
				<h3 className='text-4xl font-semibold'>{title}</h3>
				<p className='text-xl'>{description}</p>
			</div>
		</div>
	)
}

export default ListingNotificacions
