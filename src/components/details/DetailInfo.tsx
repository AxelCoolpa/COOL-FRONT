import { Box, Rating } from '@mui/material'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

interface DestailInfoProps {
	name?: string
	rating?: Array<number> | undefined
	description?: string
}

const DetailInfo: React.FC<DestailInfoProps> = ({ name, rating, description }) => {
	const averageRating = rating
		?.reduce((a, b) => a + b / rating.length, 0)
		.toString()
		.slice(0, 3)

	return (
		<div className='col-span-4 flex flex-col gap-8'>
			<div className='flex flex-col gap-8'>
				<h2 className='font-bold text-5xl'>{name}</h2>
				<div className='flex items-center'>
					<Rating
						name='text-feedback'
						value={parseFloat(averageRating)}
						size='large'
						readOnly
						precision={0.5}
						emptyIcon={<AiFillStar style={{ opacity: 0.55 }} fontSize='inherit' />}
					/>
					<Box sx={{ ml: 2 }}>
						<span className='text-3xl'>{averageRating}</span>
					</Box>
				</div>
			</div>
			<hr className='mx-2' />

			{/* 
				CONDITIONAL REDER
				<div>
					//! Tour detail
					//* TOUR SECTION HERE 
					<TourDetail />
				</div> 
			*/}

			<div className='flex flex-col gap-6'>
				<h3 className='font-medium text-3xl'>What will you do</h3>
				<p className='text-xl font-medium text-black/50'>{description}</p>
			</div>
		</div>
	)
}

export default DetailInfo
