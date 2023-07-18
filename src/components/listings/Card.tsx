/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'

import { motion, useAnimation } from 'framer-motion'

import { useCurrentUser } from '../../hooks/useCurrentUser'

import { deleteActivity } from '../../features/deleteActivitySlice'
import { deleteAccomodation } from '../../features/deleteAccomodationSlice'

import { EnumActivity, EnumRoom } from '../../types'

import Dropdown from '../dropdown/index'
import HeartButton from '../buttons/HeartButton'
import MoreOptionsButton from '../buttons/MoreOptionsButon'
import EditButon from '../buttons/EditButton'
import DisableButton from '../buttons/DisableButton'
import DeleteButton from '../buttons/DeleteButton'
import EnableButton from '../buttons/EnableButton'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from '@material-tailwind/react'

interface ListingCardProps {
	data?: EnumActivity | EnumRoom | undefined
}

const MainCard: React.FC<ListingCardProps> = ({ data }) => {
	const headingControls = useAnimation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const location = useLocation()

	const { currentUser } = useCurrentUser()

	const onDisableActivity = async () => {
		await dispatch(deleteActivity(data?._id))
	}

	const onDisableRoom = async () => {
		await dispatch(deleteAccomodation(data?._id))
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
					{location.pathname === '/provider' ? (
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
										{data?.itDeleted === false ? (
											<div className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap'>
												<div className='flex gap-5 items-center '>
													<EditButon
														onClick={() => navigate(`/provider/update/${data?._id}`)}
													/>
													<p
														onClick={() => navigate(`/provider/update/${data?._id}`)}
														className='cursor-pointer'
													>
														{currentUser?.profileProvider?.relatedChannel === 'Travel'
															? 'Edit activity'
															: currentUser?.profileProvider?.relatedChannel ===
															  'Accomodation'
															? 'Edit room'
															: 'Edit service'}
													</p>
												</div>
											</div>
										) : (
											<div className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap'>
												<div className='flex gap-5 items-center '>
													<EnableButton />
													<p className='cursor-pointer'>
														{currentUser?.profileProvider?.relatedChannel === 'Travel'
															? 'Enable activity'
															: currentUser?.profileProvider?.relatedChannel ===
															  'Accomodation'
															? 'Enable room'
															: 'Enable service'}
													</p>
												</div>
											</div>
										)}
										{data?.itDeleted === false ? (
											<div className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap text-blueGray-700'>
												<div className='flex gap-5 items-center '>
													{currentUser?.profileProvider?.relatedChannel === 'Travel' ? (
														<div className='flex gap-5 items-center '>
															<DisableButton onClick={onDisableActivity} />
															<p onClick={onDisableActivity} className='cursor-pointer'>
																Disable activity
															</p>
														</div>
													) : currentUser?.profileProvider?.relatedChannel ===
													  'Accomodation' ? (
														<div className='flex gap-5 items-center '>
															<DisableButton onClick={onDisableRoom} />
															<p onClick={onDisableRoom} className='cursor-pointer'>
																Disable room
															</p>
														</div>
													) : (
														<div className='flex gap-5 items-center '>
															<DisableButton />
															<p className='cursor-pointer'>Disable service</p>
														</div>
													)}
												</div>
											</div>
										) : (
											<div className='flex gap-5 items-center '>
												<DeleteButton />
												<p className='cursor-pointer'>
													{currentUser?.profileProvider?.relatedChannel === 'Travel'
														? 'Delete activity'
														: currentUser?.profileProvider?.relatedChannel ===
														  'Accomodation'
														? 'Delete room'
														: 'Delete service'}
												</p>
											</div>
										)}
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
					{data?.galleryImage ? (
						<img
							src={data?.galleryImage || data?.galleryImage[0]}
							alt={data?.title}
							className='h-full w-full object-cover'
						/>
					) : (
						<img
							src={data?.images || data?.images[0]}
							alt={data?.name}
							className='h-full w-full object-cover'
						/>
					)}
				</CardHeader>
				<CardBody className='py-0 px-1'>
					<Typography variant='small' className='font-normal text-blue-gray-500'>
						{data?.location}
					</Typography>
					<Typography variant='h5' color='blue-gray' className='mt-1 mb-2'>
						{data?.title || data?.name}
					</Typography>
				</CardBody>
				<CardFooter className='mt-3 flex items-center justify-between py-0 px-1'>
					{data?.title ? (
						<Button
							onClick={() => navigate(`/details/activity/${data?._id}`)}
							variant='outlined'
							size='sm'
						>
							view
						</Button>
					) : (
						data?.name && (
							<Button
								onClick={() => navigate(`/details/accomodation/${data?._id}`)}
								variant='outlined'
								size='sm'
							>
								view
							</Button>
						)
					)}
				</CardFooter>
			</Card>
		</motion.div>
	)
}

export default MainCard
