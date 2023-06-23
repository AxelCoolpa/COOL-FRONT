import React, { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router'
import { motion, useAnimation } from "framer-motion";
import { AiFillStar } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'

import HeartButton from '../buttons/HeartButton'

import { EnumData } from '../../types'
import EditButon from '../buttons/EditButton'

interface ListingCardProps {
	data: EnumData | undefined
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
	const headingControls = useAnimation();
	const navigate = useNavigate()
	const location = useLocation()

	const averageRating = data?.rating
		.reduce((a, b) => a + b / data?.rating.length, 0)
		.toString()
		.slice(0, 3)

		useEffect(() => {
			const startAnimation = async () => {
			  await headingControls.start({
				x: 0,
				transition: { duration: 0.4, delay: 0.5 },
			  });
			};
			startAnimation();
		  }, [headingControls]);
		
	return (
		<motion.div initial={{ y: 10, opacity: 0 }}
		animate={{ y: 0, opacity: 2 }}
		exit={{ y: -10, opacity: 0 }}
		transition={{ duration: 0.4 }} >
		<div className='bg-[#f7f8f9] col-span-1 group rounded-xl pb-4 drop-shadow'>
			<div className='relative'>
				<img
					src={data?.gallery[0]}
					className='object-cover w-full h-[200px] rounded-t-xl'
				/>
				<div className='absolute top-3 right-3'>
					{location.pathname === '/provider' ? (
						<EditButon onClick={() => navigate(`/provider/update/${data?._id}`)} />
					) : (
						<HeartButton size={25} />
					)}
				</div>
			</div>
			<div
				onClick={() => navigate(`/details/${data?._id}`)}
				className='flex items-center justify-between px-3 pt-4 cursor-pointer'
			>
				<h4 className='text-base font-semibold'>{data?.title}</h4>
				<div className='flex items-center gap-1'>
					<AiFillStar size={18} color='#faaf00' />
					<span className='text-sm font-medium'>{averageRating}</span>
				</div>
			</div>
			{data?.activities ||
				data?.starterPack ||
				data?.startTime ||
				(data?.endTime && (
					<ul className='flex flex-col justify-center px-3 py-4 text-xs gap-1 text-[#00000080]'>
						{data?.activities && (
							<li>
								<div className='flex items-center gap-1'>
									<BsDot size={20} />
									{data?.activities}
								</div>
							</li>
						)}
						{data?.starterPack && (
							<li>
								<div className='flex items-center gap-1'>
									<BsDot size={20} />
									{data?.starterPack}
								</div>
							</li>
						)}
						{data?.startTime && data?.endTime && (
							<li>
								<div className='flex items-center gap-1'>
									<BsDot size={20} />
									{data?.startTime} to {data?.endTime}
								</div>
							</li>
						)}
					</ul>
				))}
			<div className='flex justify-center text-white font-bold text-lg py-2'>
				<button
					onClick={() => alert('Call to Action Aquí')}
					className='bg-GreenCooL w-full mx-6 rounded-lg py-1 hover:bg-opacity-90'
				>
					{data?.individualPrice}$
				</button>
			</div>
		</div>
		</motion.div>
	)
}

export default ListingCard
