import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import HeartButton from '../buttons/HeartButton'
import { useNavigate } from 'react-router'

import { EnumData } from '../../types'

interface ListingCardProps {
	data: EnumData | undefined
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
	const navigate = useNavigate()
	const averageRating = data?.rating
		.reduce((a, b) => a + b / data?.rating.length, 0)
		.toString()
		.slice(0, 3)

	console.log(data?.extras.activities)

	return (
		<div className='bg-[#f7f8f9] col-span-1 group rounded-xl pb-4 drop-shadow'>
			<div className='relative'>
				<img
					src={data?.gallery[0]}
					className='object-cover w-full h-[200px] rounded-t-xl'
				/>
				<div className='absolute top-3 right-3'>
					<HeartButton size={25} />
				</div>
			</div>
			<div
				onClick={() => navigate(`/details/${data?.id}`)}
				className='flex items-center justify-between px-3 pt-4 cursor-pointer'
			>
				<h4 className='text-base font-semibold'>{data?.title}</h4>
				<div className='flex items-center gap-1'>
					<AiFillStar size={18} color='#faaf00' />
					<span className='text-sm font-medium'>{averageRating}</span>
				</div>
			</div>
			<ul className='flex flex-col justify-center px-3 py-4 text-xs gap-1 text-[#00000080]'>
				<li>
					<div className='flex items-center gap-1'>
						<BsDot size={20} />
						{data?.extras?.activities}
					</div>
				</li>
				<li>
					<div className='flex items-center gap-1'>
						<BsDot size={20} />
						{data?.extras?.starterPack}
					</div>
				</li>
				<li>
					<div className='flex items-center gap-1'>
						<BsDot size={20} />
						{data?.extras?.startTime} to {data?.extras?.endTime}
					</div>
				</li>
			</ul>
			<div className='flex justify-center text-white font-bold text-lg py-2'>
				<button
					onClick={() => alert('Call to Action Aquí')}
					className='bg-GreenCooL w-full mx-6 rounded-lg py-1 hover:bg-opacity-90'
				>
					{data?.individualPrice}$
				</button>
			</div>
		</div>
	)
}

export default ListingCard
