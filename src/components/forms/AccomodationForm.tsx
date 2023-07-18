/* eslint-disable no-mixed-spaces-and-tabs */
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
import Textarea from '../inputs/Textarea'

interface AccomodationFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	form?: createAccomodationFormData
	updateForm?: updateAccomodationFormData
}

const AccomodationForm: React.FC<AccomodationFormProps> = ({
	handleChange,
	form,
	updateForm,
}) => {
	return (
		<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<RiHotelLine size={25} />
						<label>Property</label>
					</div>
					{form ? (
						<Input
							placeholder={'Property name'}
							id='name'
							name='name'
							handleChange={handleChange}
							value={form?.name}
						/>
					) : (
						<Input
							placeholder={'Update Property name'}
							id='name'
							name='name'
							handleChange={handleChange}
							value={updateForm?.name}
						/>
					)}
				</div>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<MdAttachMoney size={25} />
						<label>Price</label>
					</div>
					<Input
						type='number'
						placeholder={updateForm ? 'Update Update Price' : 'Update Price'}
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
						updateForm?.category === 'Cottage' ||
						form?.category === 'House' ||
						updateForm?.category === 'House' ? (
							<div className='flex flex-col gap-10 w-full'>
								<div className='flex items-center gap-5 text-[#686868]'>
									<MdMeetingRoom size={25} />
									<label>Rooms Count</label>
								</div>
								<Input
									type='number'
									placeholder={updateForm ? 'Update Rooms Count' : 'Room Count'}
									id='roomsCount'
									name='roomsCount'
									handleChange={handleChange}
									value={updateForm?.roomsCount || form?.roomsCount}
								/>
							</div>
						) : form?.category === 'Camping Area' ||
						  updateForm?.category === 'Camping Area' ? (
							<div className='flex flex-col gap-10 w-full'>
								<div className='flex items-center gap-5 text-neutral-300'>
									<MdMeetingRoom size={25} />
									<label>Rooms Count | Room Number</label>
								</div>
								<Input
									type='number'
									placeholder={updateForm ? 'Update Rooms Count' : 'Room Count'}
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
									placeholder={updateForm ? 'Update Room Number' : 'Room Number'}
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
								placeholder={updateForm ? 'Update Beds Count' : 'Beds Count'}
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
								placeholder={updateForm ? 'Update Max occupancy' : 'Max occupancy'}
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
								placeholder={updateForm ? 'Update Bathrooms count' : 'Bathrooms count'}
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
				{form ? (
					<Textarea
						placeholder={'Accomodation description'}
						id='description'
						name='description'
						handleChange={handleChange}
						value={form?.description}
					/>
				) : (
					<Textarea
						placeholder={'Update description'}
						id='description'
						name='description'
						handleChange={handleChange}
						value={updateForm?.description}
					/>
				)}
			</div>
		</div>
	)
}

export default AccomodationForm
