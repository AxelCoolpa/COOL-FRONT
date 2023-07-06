import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { deleteAdventure } from '../../features/deleteAdventureSlice'

import { useLocation, useNavigate } from 'react-router'
import { motion, useAnimation } from 'framer-motion'

import { EnumData } from '../../types'

import Dropdown from '../dropdown/index'
import HeartButton from '../buttons/HeartButton'
import MoreOptionsButton from '../buttons/MoreOptionsButon'
import EditButon from '../buttons/EditButton'
import DeleteButton from '../buttons/DeleteButton'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from '@material-tailwind/react'

interface ListingCardProps {
	data: EnumData | undefined
}

const ListingCardnew: React.FC<ListingCardProps> = ({ data }) => {
	const headingControls = useAnimation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const location = useLocation()

	const destinationID = data?._id

	const onDelete = async () => {
		await dispatch(deleteAdventure(destinationID))
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
			<Card className='mx-3 my-4' color='transparent' shadow={false}>
				<div className='absolute top-3 right-3 text-black'>
					{location.pathname === '/admindash' ? (
						<Dropdown
							button={<MoreOptionsButton />}
							children={
								<div className='flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl'>
									<div className='mt-3 ml-4'>
										<div className='flex flex-col gap-2'>
											<p className='text-sm font-bold cursor-default'>Options</p>
										</div>
									</div>
									<div className='mt-3 mx-4 flex flex-col gap-5'>
										<div className='h-px w-full bg-gray-200' />
										<div className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap'>
											<div className='flex gap-5 items-center '>
												<EditButon
													onClick={() => navigate(`/admindash/update/${data?._id}`)}
												/>
												<p
													onClick={() => navigate(`/admindash/update/${data?._id}`)}
													className='cursor-pointer'
												>
													Edit destination
												</p>
											</div>
										</div>
										<div className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap text-blueGray-700'>
											<div className='flex gap-5 items-center '>
												<DeleteButton onClick={onDelete} />
												<p onClick={onDelete} className='cursor-pointer'>
													Delete destination
												</p>
											</div>
										</div>
									</div>
								</div>
							}
							classNames={'py-2 top-4 right-0 w-max'}
						/>
					) : (
						<HeartButton size={25} />
					)}
				</div>
				<CardHeader floated={false} color='gray' className='mx-0 mt-0 mb-4 h-64 xl:h-40'>
					<img
						src={data?.galleryImage || data?.gallery[0]}
						alt={data?.title}
						className='h-full w-full object-cover'
					/>
				</CardHeader>
				<CardBody className='py-0 px-1'>
					<Typography variant='small' className='font-normal text-blue-gray-500'>
						{data?.location}
					</Typography>
					<Typography variant='h5' color='blue-gray' className='mt-1 mb-2'>
						{data?.title}
					</Typography>
				</CardBody>
				<CardFooter className='mt-3 flex items-center justify-between py-0 px-1'>
					<a>
						<Button
							onClick={() => navigate(`/details/${data?._id}`)}
							variant='outlined'
							size='sm'
						>
							view
						</Button>
					</a>
				</CardFooter>
			</Card>
		</motion.div>
	)
}

export default ListingCardnew
