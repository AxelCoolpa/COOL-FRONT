import React from 'react'

import { CgInfo } from 'react-icons/cg'
import { BiKey } from 'react-icons/bi'
import { LuCalendarCheck } from 'react-icons/lu'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RxActivityLog } from 'react-icons/rx'

import Input from './inputs/Input'
import { FiPackage } from 'react-icons/fi'

interface EnumExtras {
	activities: string
	starterPack: string
	startTime: string
	endTime: string
}

interface EnumForm {
	title: string
	description: string
	individualPrice: string
	groupPrice: string
	location: string
	extras: EnumExtras
}
interface AddAdventureFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	form: EnumForm
}

const AddAdventureForm: React.FC<AddAdventureFormProps> = ({ handleChange, form }) => {
	return (
		<div className='col-span-5 flex flex-col items-center xl:items-start gap-12'>
			<div className='flex flex-col md:flex-row gap-8 2xl:gap-32'>
				<div className='flex items-center gap-2'>
					<div className='w-80 2xl:w-96'>
						<Input
							label='Price adventure indivial'
							id='individualPrice'
							name='individualPrice'
							handleChange={handleChange}
							value={form?.individualPrice}
						/>
					</div>
					<CgInfo size={50} color='#FFBC39' style={{ cursor: 'pointer' }} />
				</div>
				<div className='w-80 2xl:w-96'>
					<Input
						label='Price adventure groups'
						id='groupPrice'
						name='groupPrice'
						handleChange={handleChange}
						value={form?.groupPrice}
					/>
				</div>
			</div>
			<div className='flex flex-col items-center xl:items-start 2xl:flex-row gap-10'>
				<div className='flex flex-col md:flex-row items-center justify-center bg-OrangeToGreen rounded-full w-36 h-36'>
					<div className='-scale-x-100'>
						<BiKey size={60} color='white' />
					</div>
				</div>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex flex-col md:flex-row gap-8'>
						<div className='flex flex-col gap-10 2xl:w-64'>
							<label className='text-OrangeCooL'>Adventure ID #0052466623</label>
							<Input
								label='Title adventure'
								id='title'
								name='title'
								handleChange={handleChange}
								value={form?.title}
							/>
						</div>
						<div className='flex flex-col gap-10 text-[#898989]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<HiOutlineLocationMarker size={25} />
								<label className=''>Which is the location?</label>
							</div>
							<Input
								label='Location'
								id='location'
								name='location'
								handleChange={handleChange}
								value={form?.location}
							/>
						</div>
						<div className='flex flex-col gap-10 text-[#898989]'>
							<div className='flex items-center gap-5 text-[#686868] '>
								<RxActivityLog size={20} />
								<label className='text-[#686868]'>Activities</label>
							</div>
							<Input
								label='Activities'
								id={form?.extras.activities}
								name={form?.extras.activities}
								handleChange={handleChange}
								value={form?.extras.activities}
							/>
						</div>
					</div>
					<div className='flex flex-col md:flex-row gap-8'>
						<div className='flex flex-col gap-10 2xl:w-64 text-[#898989]'>
							<div className='flex items-center gap-5 text-[#686868] '>
								<FiPackage size={25} />
								<label className='text-[#686868]'>Starter Pack</label>
							</div>
							<Input
								label='Starter Pack'
								id='extras.starterPack'
								name='extras.starterPack'
								handleChange={handleChange}
								value={form?.extras.starterPack}
							/>
						</div>
						<div className='flex flex-col gap-10 text-[#898989]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<LuCalendarCheck size={25} />
								<label className=''>Start Time</label>
							</div>
							<Input
								label='Start Time'
								id='extras.startTime'
								name='extras.startTime'
								handleChange={handleChange}
								value={form?.extras.startTime}
							/>
						</div>
						<div className='flex flex-col gap-10 text-[#898989]'>
							<div className='flex items-center gap-5 text-[#686868] '>
								<LuCalendarCheck size={25} />
								<label>End Time</label>
							</div>
							<Input
								label='End Time'
								id='extras.endTime'
								name='extras.endTime'
								handleChange={handleChange}
								value={form?.extras.endTime}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full xl:w-10/12'>
				<Input
					label='Adventure description'
					id='description'
					name='description'
					sizeH={36}
					handleChange={handleChange}
					value={form?.description}
				/>
			</div>
		</div>
	)
}

export default AddAdventureForm
