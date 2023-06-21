import React from 'react'

import { useNavigate } from 'react-router'

import { Box, Rating } from '@mui/material'
import { AiFillStar } from 'react-icons/ai'

import headerImg from '../../assets/headerImg.jpg'
import HeartButton from '../buttons/HeartButton'
import BookingBar from '../BookingBar'

interface HeaderSectioonProps {
	id?: string
	title?: string
	subtitle?: string
	name?: string
	rate?: Array<number>
	image?: string
	favorite?: boolean
	price?: string
}

const HeaderSection: React.FC<HeaderSectioonProps> = ({
	id,
	title,
	subtitle,
	name,
	rate,
	image,
	favorite,
	price,
}) => {
	const navigate = useNavigate()
	const averageRating = rate
		?.reduce((a, b) => a + b / rate.length, 0)
		.toString()
		.slice(0, 3)

	return (
		<div className='relative flex items-center justify-center xl:h-[400px] transition'>
			<img
				src={image || headerImg}
				className='-z-10 w-screen h-[250px] lg:h-[300px] xl:h-[400px] object-cover rounded-[20px]'
			/>
			<div className='absolute top-0 flex w-full bg-black/50 rounded-[20px] h-full xl:h-[400px]'></div>
			{title && subtitle ? (
				<div className='absolute flex flex-col items-center gap-5 text-white'>
					<h1 className='text-3xl lg:text-5xl  xl:text-6xl font-bold'>{title}</h1>
					<h3 className='text-sm lg:text-base xl:text-xl font-medium'>{subtitle}</h3>
				</div>
			) : null}
			<div className='absolute flex flex-col left-0 sm:left-5 lg:left-10 xl:left-20 top-[150px] lg:top-44 gap-5 text-white scale-75 xl:scale-100'>
				{name && <h2 className='text-4xl font-bold'>{name}</h2>}

				{rate && favorite ? (
					<div className='flex items-center'>
						<Rating
							name='text-feedback'
							value={Number(averageRating)}
							readOnly
							precision={0.5}
							emptyIcon={<AiFillStar style={{ opacity: 0.55 }} fontSize='inherit' />}
						/>
						<Box sx={{ ml: 2 }}>{averageRating}</Box>
					</div>
				) : null}
			</div>

			<div className='absolute flex flex-col items-center right-0 sm:right-5 lg:right-10 xl:right-16 min-[1440px]:right-28 xl:top-10 gap-36 xl:gap-28 text-white scale-75 lg:scale-[85%] xl:scale-100'>
				{rate && favorite ? (
					<div className='z-10'>
						<HeartButton />
					</div>
				) : null}

				{price && (
					<button
						onClick={() => navigate(`/details/${id}`)}
						className='bg-[#109460] w-[140px] h-[59px] rounded-[10px] text-[40px] font-semibold'
					>
						{price}$
					</button>
				)}
			</div>

			<BookingBar />
		</div>
	)
}

export default HeaderSection
