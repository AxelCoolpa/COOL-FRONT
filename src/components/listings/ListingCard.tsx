import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'

import { deleteActivity } from '../../features/deleteActivitySlice'

import { motion, useAnimation } from 'framer-motion'

import { BsDot } from 'react-icons/bs'

import { EnumActivity } from '../../types'

import Dropdown from '../dropdown/index'
import HeartButton from '../buttons/HeartButton'
import MoreOptionsButton from '../buttons/MoreOptionsButon'
import EditButon from '../buttons/EditButton'
import DeleteButton from '../buttons/DeleteButton'

interface ListingCardProps {
	data: EnumActivity | undefined
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
	const headingControls = useAnimation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const location = useLocation()

	const activityID = data?._id

	const onDelete = async () => {
		await dispatch(deleteActivity(activityID))
	}

	useEffect(() => {
		const startAnimation = async () => {
			await headingControls.start({
				x: 0,
				transition: { duration: 0.4, delay: 0.5 },
			})
		}
		startAnimation()
	}, [headingControls])

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 2 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.4 }}
		>
			<div className='bg-[#f7f8f9] col-span-1 group rounded-xl pb-4 drop-shadow'>
				<div className='relative'>
					<img
						src={data?.galleryImage || data?.galleryImage[0]}
						className='object-cover w-full h-[200px] rounded-t-xl'
					/>
					<div className='absolute top-3 right-3'>
						{location.pathname === '/provider' ? // 			<div className='mt-3 ml-4'> // 		<div className='flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl'> // 	children={ // 	button={<MoreOptionsButton />} // <Dropdown
						// 				<div className='flex flex-col gap-2'>
						// 					<p className='text-sm font-bold cursor-default'>Options</p>
						// 				</div>
						// 			</div>
						// 			<div className='mt-3 mx-4 flex flex-col gap-5'>
						// 				<div className='h-px w-full bg-gray-200' />
						// 				<div className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap'>
						// 					<div className='flex gap-5 items-center '>
						// 						<EditButon
						// 							onClick={() => navigate(`/provider/update/${data?._id}`)}
						// 						/>
						// 						<p
						// 							onClick={() => navigate(`/provider/update/${data?._id}`)}
						// 							className='cursor-pointer'
						// 						>
						// 							Edit activity
						// 						</p>
						// 					</div>
						// 				</div>
						// 				<div className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap text-blueGray-700'>
						// 					<div className='flex gap-5 items-center '>
						// 						<DeleteButton onClick={onDelete} />
						// 						<p onClick={onDelete} className='cursor-pointer'>
						// 							Delete activity
						// 						</p>
						// 					</div>
						// 				</div>
						// 			</div>
						// 		</div>
						// 	}
						// 	classNames={'py-2 top-4 right-0 w-max'}
						// />
						null : (
							<HeartButton size={25} />
						)}
					</div>
				</div>
				<div
					onClick={() => navigate(`/details/${data?._id}`)}
					className='flex items-center justify-between px-3 pt-4 cursor-pointer'
				>
					<h4 className='text-base font-semibold'>{data?.title}</h4>
					{/* {averageRating > 0 && (
						<div className='flex items-center gap-1'>
							<AiFillStar size={18} color='#faaf00' />
							<span className='text-sm font-medium'>{averageRating}</span>
						</div>
					)} */}
				</div>
				{data?.starterPack || data?.startTime || data?.endTime ? (
					<ul className='flex flex-col justify-center px-3 py-4 text-xs gap-1 text-[#00000080]'>
						{data?.starterPack && (
							<li>
								<div className='flex items-center gap-1'>
									<BsDot size={20} />
									{data?.starterPack}
								</div>
							</li>
						)}
						{data?.startTime && (
							<li>
								<div className='flex items-center gap-1'>
									<BsDot size={20} />
									{data?.startTime} {data?.endTime ? `to ${data?.endTime}` : null}
								</div>
							</li>
						)}
					</ul>
				) : null}
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
