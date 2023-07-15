import React from 'react'

import { GrRestroom } from 'react-icons/gr'
import {
	MdAttachMoney,
	MdMeetingRoom,
	MdOutlineFamilyRestroom,
	MdRoomService,
} from 'react-icons/md'
import { RiHotelLine } from 'react-icons/ri'
import { TbBed, TbCalendarCheck, TbCalendarX, TbFileDescription } from 'react-icons/tb'

import { createAccomodationFormData } from '../../features/createAccomodationSlice'
import { updateAccomodationFormData } from '../../features/updateAccomodationSlice'

import Input from '../inputs/Input'

interface AccomodationFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	form?: createAccomodationFormData
	updateForm?: updateAccomodationFormData
	data?: {
		name?: string
		price?: number
		roomsCount?: number
		bedsCount?: number
		maxOccupancy?: number
		bathRoomsCount?: number
		startDate?: string
		endDate?: string
		description?: string
		category?: string
	}
}

const AccomodationForm: React.FC<AccomodationFormProps> = ({
	handleChange,
	form,
	updateForm,
	data,
}) => {
	console.log(form?.category)

	return (
		<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<RiHotelLine size={25} />
						<label>Property Name</label>
					</div>
					<Input
						placeholder={data?.name || 'Property name'}
						id='name'
						name='name'
						handleChange={handleChange}
						value={updateForm?.name || form?.name}
					/>
				</div>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<MdAttachMoney size={25} />
						<label>Price</label>
					</div>
					<Input
						type='number'
						placeholder={data?.price || 'Accomodation price'}
						id='price'
						name='price'
						handleChange={handleChange}
						value={updateForm?.price || form?.price}
					/>
				</div>
			</div>

			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
					<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
						{form?.category === 'Cottage' ||
						data?.category === 'Cottage' ||
						form?.category === 'House' ||
						data?.category === 'House' ? (
							<div className='flex flex-col gap-10 w-full'>
								<div className='flex items-center gap-5 text-[#686868]'>
									<MdMeetingRoom size={25} />
									<label>Rooms Count</label>
								</div>
								<Input
									type='number'
									placeholder={data?.roomsCount || 'Rooms count'}
									id='roomsCount'
									name='roomsCount'
									handleChange={handleChange}
									value={updateForm?.roomsCount || form?.roomsCount}
								/>
							</div>
						) : form?.category === 'Camping Area' || data?.category === 'Camping Area' ? (
							<div className='flex flex-col gap-10 w-full'>
								<div className='flex items-center gap-5 text-neutral-300'>
									<MdMeetingRoom size={25} />
									<label>Rooms Count | Room Number</label>
								</div>
								<Input
									type='number'
									placeholder={data?.roomsCount || 'Rooms count'}
									id='roomsCount'
									name='roomsCount'
									disabled
									handleChange={handleChange}
									value={updateForm?.roomsCount || form?.roomsCount}
								/>
							</div>
						) : (
							<div className='flex flex-col gap-10 w-full'>
								<div className='flex items-center gap-5 text-[#686868]'>
									<MdRoomService size={25} />
									<label>Room Number</label>
								</div>
								<Input
									type='number'
									placeholder={data?.roomsCount || 'Room Number'}
									id='roomsCount'
									name='roomsCount'
									handleChange={handleChange}
									value={updateForm?.roomsCount || form?.roomsCount}
								/>
							</div>
						)}

						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<TbBed size={20} />
								<label>Beds Count</label>
							</div>
							<Input
								type='number'
								placeholder={data?.bedsCount || 'Beds count'}
								id='bedsCount'
								name='bedsCount'
								handleChange={handleChange}
								value={updateForm?.bedsCount || form?.bedsCount}
							/>
						</div>
					</div>
					<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<MdOutlineFamilyRestroom size={25} />
								<label>Max Occupancy</label>
							</div>
							<Input
								type='number'
								placeholder={data?.maxOccupancy || 'Max occupancy'}
								id='maxOccupancy'
								name='maxOccupancy'
								handleChange={handleChange}
								value={updateForm?.maxOccupancy || form?.maxOccupancy}
							/>
						</div>

						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<GrRestroom size={20} />
								<label>Bathrooms Count</label>
							</div>
							<Input
								type='number'
								placeholder={data?.bathRoomsCount || 'Bathrooms count'}
								id='bathRoomsCount'
								name='bathRoomsCount'
								handleChange={handleChange}
								value={updateForm?.bathRoomsCount || form?.bathRoomsCount}
							/>
						</div>
					</div>

					<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<TbCalendarCheck size={25} />
								<label>Start Date</label>
							</div>
							<Input
								type='datetime-local'
								id='startDate'
								name='startDate'
								handleChange={handleChange}
								value={updateForm?.startDate || form?.startDate}
							/>
						</div>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<TbCalendarX size={25} />
								<label>End Date</label>
							</div>
							<Input
								type='datetime-local'
								id='endDate'
								name='endDate'
								handleChange={handleChange}
								value={updateForm?.endDate || form?.endDate}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-10 w-full h-full'>
				<div className='flex items-center gap-5 text-[#686868]'>
					<TbFileDescription size={25} />
					<label>Description</label>
				</div>
				{data?.description ? <p className='text-zinc-500'>{data?.description}</p> : null}
				<Input
					label={
						data?.description ? 'Update Property description' : 'Property description'
					}
					id='description'
					name='description'
					handleChange={handleChange}
					value={updateForm?.description || form?.description}
					sizeH={44}
				/>
			</div>
		</div>
	)
}

export default AccomodationForm
