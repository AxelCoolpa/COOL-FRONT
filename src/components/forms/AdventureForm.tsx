import React from 'react'

// import { BiKey } from 'react-icons/bi'
import { CgInfo } from 'react-icons/cg'
import { FiPackage } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LuCalendarCheck } from 'react-icons/lu'
import { RxActivityLog } from 'react-icons/rx'

import { createAdventureFormData } from '../../features/createAdventureSlice'

import Input from '../inputs/Input'

interface AddAdventureFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	form: createAdventureFormData
}

const AdventureForm: React.FC<AddAdventureFormProps> = ({ handleChange, form }) => {
	return (
		<div className='col-span-5 flex flex-col items-center gap-12 transition'>
			<div className='flex flex-col lg:flex-row gap-8 lg:gap-32'>
				<div className='flex items-center gap-2'>
					<div className='relative w-80 xl:w-[278px] 2xl:w-96'>
						<Input
							placeholder='Price adventure indivial'
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
						placeholder='Price adventure groups'
						id='groupPrice'
						name='groupPrice'
						handleChange={handleChange}
						value={form?.groupPrice}
					/>
				</div>
			</div>
			<div className='flex flex-col items-center 2xl:flex-row gap-10'>
				{/* <div className='flex flex-col md:flex-row items-center justify-center bg-OrangeToGreen rounded-full w-36 h-36'>
					<div className='-scale-x-100'>
						<BiKey size={60} color='white' />
					</div>
				</div> */}
				<div className='flex flex-col items-center gap-10'>
					<div className='flex flex-col lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<label className='text-OrangeCooL'>Adventure ID #0052466623</label>
							<Input
								placeholder='Title adventure'
								id='title'
								name='title'
								handleChange={handleChange}
								value={form?.title}
							/>
						</div>
						<div className='flex flex-col gap-10 text-[#898989] w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<HiOutlineLocationMarker size={25} />
								<label className=''>Which is the location?</label>
							</div>
							<Input
								placeholder='Location'
								id='location'
								name='location'
								handleChange={handleChange}
								value={form?.location}
							/>
						</div>
						<div className='flex flex-col gap-10 text-[#898989] w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<RxActivityLog size={20} />
								<label className='text-[#686868]'>Activities</label>
							</div>
							<Input
								placeholder='Activities'
								id='activities'
								name='activities'
								handleChange={handleChange}
								value={form?.activities}
							/>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 text-[#898989] w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<FiPackage size={25} />
								<label className='text-[#686868]'>Starter Pack</label>
							</div>
							<Input
								placeholder='Starter Pack'
								id='starterPack'
								name='starterPack'
								handleChange={handleChange}
								value={form?.starterPack}
							/>
						</div>
						<div className='flex flex-col gap-10 text-[#898989] w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<LuCalendarCheck size={25} />
								<label className=''>Start Time</label>
							</div>
							<Input
								placeholder='Start Time'
								id='startTime'
								name='startTime'
								handleChange={handleChange}
								value={form?.startTime}
							/>
						</div>
						<div className='flex flex-col gap-10 text-[#898989] w-80 lg:w-60 xl:w-52 2xl:w-[278px]'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<LuCalendarCheck size={25} />
								<label>End Time</label>
							</div>
							<Input
								placeholder='End Time'
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
					sizeH={36}
					handleChange={handleChange}
					value={form?.description}
				/>
			</div>
		</div>
	)
}

export default AdventureForm
