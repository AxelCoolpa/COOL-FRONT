import React from 'react'

// import { BiKey } from 'react-icons/bi'
import { CgInfo } from 'react-icons/cg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
// import { FiPackage } from 'react-icons/fi'
// import { LuCalendarCheck } from 'react-icons/lu'
// import { RxActivityLog } from 'react-icons/rx'

import { createAdventureFormData } from '../../features/createAdventureSlice'

import Input from '../inputs/Input'
import { MdOutlineTitle } from 'react-icons/md'
import { TbFileDescription } from 'react-icons/tb'

interface AddAdventureFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	form: createAdventureFormData
}

const AdventureForm: React.FC<AddAdventureFormProps> = ({ handleChange, form }) => {
	return (
		<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<MdOutlineTitle size={25} />
						<label>Adventure</label>
					</div>
					<Input
						placeholder='Adventure Name'
						id='title'
						name='title'
						handleChange={handleChange}
						value={form?.title}
					/>
				</div>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<HiOutlineLocationMarker size={25} />
						<label>Which is the location?</label>
					</div>
					<div className='relative w-full'>
						<Input
							placeholder='Location'
							id='location'
							name='location'
							handleChange={handleChange}
							value={form?.location}
						/>
						<div className='absolute right-2 top-1 z-20'>
							<CgInfo size={50} color='#FFBC39' style={{ cursor: 'pointer' }} />
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center gap-10 w-full'>
				<div className='flex flex-col items-center justify-center gap-10 w-full'>
					<div className='flex flex-col items-center justify-center lg:flex-row gap-8 w-full'>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								{/* <MdOutlineTitle size={25} /> */}
								<label>----</label>
							</div>
							<Input
								placeholder='----'
								// id='location'
								// name='location'
								handleChange={handleChange}
								// value={form?.location}
							/>
						</div>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								{/* <HiOutlineLocationMarker size={25} /> */}
								<label>----</label>
							</div>
							<Input
								placeholder='----'
								// id='location'
								// name='location'
								handleChange={handleChange}
								// value={form?.location}
							/>
						</div>
						{/* <div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<RxActivityLog size={20} />
								<label>Activities</label>
							</div>
							<Input
								placeholder='Activities'
								id='activities'
								name='activities'
								handleChange={handleChange}
								value={form?.activities}
							/>
						</div> */}
					</div>
					{/* <div className='flex flex-col lg:flex-row gap-8'>
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
								placeholder='Start Time'
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
								placeholder='End Time'
								id='endTime'
								name='endTime'
								handleChange={handleChange}
								value={form?.endTime}
							/>
						</div>
					</div> */}
				</div>
			</div>

			<div className='flex flex-col gap-10 w-full'>
				<div className='flex items-center gap-5 text-[#686868]'>
					<TbFileDescription size={25} />
					<label>Description</label>
				</div>
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
