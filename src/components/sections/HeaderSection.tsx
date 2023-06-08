import React from 'react'
import HeaderImg from '../../assets/headerImg.svg'
import Input from '../inputs/Input'
import { Box, Rating } from '@mui/material'
import { StayPrimaryLandscapeOutlined } from '@mui/icons-material'
import HeartButton from '../HeartButton'

interface HeaderSectioonProps {
	title?: string
	subtitle?: string
	name?: string
	rate?: number
	image?: string
	favorite?: boolean
	price?: number
}

const HeaderSection: React.FC<HeaderSectioonProps> = ({
	title,
	subtitle,
	name,
	rate,
	image,
	favorite,
	price,
}) => {
	return (
		<div className='relative flex items-center justify-center'>
			<img src={image || HeaderImg} className='-z-10' />
			{title && subtitle ? (
				<div className='absolute flex flex-col items-center gap-5 text-white'>
					<h1 className='text-6xl font-bold'>{title}</h1>
					<h3 className='text-xl font-medium'>{subtitle}</h3>
				</div>
			) : null}
			{name && rate ? (
				<div className='absolute flex flex-col left-11 top-60 gap-5 text-white'>
					<h2 className='text-4xl font-bold'>{name}</h2>

					<div className='flex items-center'>
						<Rating
							name='text-feedback'
							value={rate}
							readOnly
							precision={0.5}
							emptyIcon={
								<StayPrimaryLandscapeOutlined
									style={{ opacity: 0.55 }}
									fontSize='inherit'
								/>
							}
						/>
						<Box sx={{ ml: 2 }}>{rate}</Box>
					</div>
				</div>
			) : null}
			{favorite && price ? (
				<div className='absolute flex flex-col items-center right-16 gap-5 text-white'>
					<div className='absolute flex -top-40'>
						<HeartButton />
					</div>

					<button className='bg-[#109460] w-[140px] h-[59px] rounded-[10px] text-[40px] font-semibold'>
						{price}$
					</button>
				</div>
			) : null}
			<div className='absolute flex justify-between items-center w-11/12 p-10 bg-white shadow-black/30 shadow-lg -bottom-24 rounded-lg px-10'>
				<div className='flex flex-col  justify-center gap-2'>
					<span className='font-bold'>Location</span>
					<Input id='location' label='Location' />
				</div>
				<div className='flex flex-col  justify-center gap-2'>
					<span className='font-bold'>Start date</span>
					<Input id='starDate' label='---/-----/--' />
				</div>
				<div className='flex flex-col  justify-center gap-2'>
					<span className='font-bold'>Ending date</span>
					<Input id='endDate' label='---/-----/--' />
				</div>
				<div className='flex flex-col  justify-center  gap-2'>
					<span className='font-bold'>Peoples</span>
					<Input id='peoples' label='1 adult' />
				</div>
				<div className='bg-[#CE452A] w-[147px] h-[41px] gap-2 text-white rounded-lg text-center cursor-pointer'>
					<button className='font-bold p-2'>Search</button>
				</div>
			</div>
		</div>
	)
}

export default HeaderSection
