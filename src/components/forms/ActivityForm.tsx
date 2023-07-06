import React from 'react'

import { CgInfo } from 'react-icons/cg'
import { FiPackage } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LuCalendarCheck } from 'react-icons/lu'
import { MdOutlineTitle } from 'react-icons/md'
import { RxActivityLog } from 'react-icons/rx'

import { createActiviyFormData } from '../../features/createActivitySlice'

import Input from '../inputs/Input'

interface ActivityFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	form: createActiviyFormData
}

const ActivityForm: React.FC<ActivityFormProps> = ({ handleChange, form }) => {
	return (
		<div className='flex flex-col items-center gap-12 transition'>
			<div className='flex flex-col lg:flex-row gap-8 lg:gap-32'>
				<div className='flex items-center gap-2'>
					<div className='relative w-80 xl:w-[278px] 2xl:w-96'>
						<Input
							placeholder='Price activity indivial'
							id='individualPrice'
							name='individualPrice'
							handleChange={handleChange}
							value={form?.individualPrice}
						/>
						<div className='absolute -right-16 top-2'>
							<CgInfo size={50} color='#FFBC39' style={{ cursor: 'pointer' }} />
						</div>
					</div>
				</div>
				<div className='w-80 xl:w-[278px] 2xl:w-96'>
					<Input
						placeholder='Price activity groups'
						id='groupPrice'
						name='groupPrice'
						handleChange={handleChange}
						value={form?.groupPrice}
					/>
				</div>
			</div>
			<div className='flex flex-col items-center 2xl:flex-row gap-10'>
				<div className='flex flex-col items-center gap-10'>
					<div className='flex flex-col lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<MdOutlineTitle size={25} />
								<label>Activity</label>
							</div>
							<Input
								placeholder='Title activity'
								id='title'
								name='title'
								handleChange={handleChange}
								value={form?.title}
							/>
						</div>
						<div className='flex flex-col gap-10 w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<HiOutlineLocationMarker size={25} />
								<label>Which is the location?</label>
							</div>
							<Input
								placeholder='Location'
								id='location'
								name='location'
								handleChange={handleChange}
								value={form?.location}
							/>
						</div>
						<div className='flex flex-col gap-10 w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<RxActivityLog size={20} />
								<label>Video Link</label>
							</div>
							<Input
								placeholder='Video URL'
								id='videoLink'
								name='videoLink'
								handleChange={handleChange}
								value={form?.videoLink}
							/>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<FiPackage size={25} />
								<label>Starter Pack</label>
							</div>
							<Input
								placeholder='Starter Pack'
								id='starterPack'
								name='starterPack'
								handleChange={handleChange}
								value={form?.starterPack}
							/>
						</div>
						<div className='flex flex-col gap-10 w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<LuCalendarCheck size={25} />
								<label>Start Time</label>
							</div>
							<Input
								type='datetime-local'
								id='startTime'
								name='startTime'
								handleChange={handleChange}
								value={form?.startTime}
							/>
						</div>
						<div className='flex flex-col gap-10 w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<LuCalendarCheck size={25} />
								<label>End Time</label>
							</div>
							<Input
								type='datetime-local'
								id='endTime'
								name='endTime'
								handleChange={handleChange}
								value={form?.endTime}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full xl:w-[688px] 2xl:w-[896px]'>
				<Input
					label='Adventure description'
					id='description'
					name='description'
					handleChange={handleChange}
					value={form?.description}
					sizeH={44}
				/>
			</div>
		</div>
	)
}

export default ActivityForm
