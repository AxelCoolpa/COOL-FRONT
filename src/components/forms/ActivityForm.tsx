import React from 'react'

import { CgInfo } from 'react-icons/cg'
import { FiPackage } from 'react-icons/fi'
import { LuCalendarCheck } from 'react-icons/lu'
import { MdAttachMoney, MdOutlineTitle } from 'react-icons/md'
import { RxActivityLog } from 'react-icons/rx'
import { TbFileDescription, TbMoneybag } from 'react-icons/tb'

import { createActivityFormData } from '../../features/createActivitySlice'
import { updateActivityFormData } from '../../features/updateActivitySlice'

import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'

interface ActivityFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	form?: createActivityFormData
	updateForm?: updateActivityFormData
}

const ActivityForm: React.FC<ActivityFormProps> = ({
	handleChange,
	form,
	updateForm,
}) => {
	return (
		<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<MdAttachMoney size={25} />
						<label>Individual Price</label>
					</div>
					{form ? (
						<Input
							type='number'
							placeholder={'Individual Price'}
							id='individualPrice'
							name='individualPrice'
							handleChange={handleChange}
							value={form?.individualPrice}
						/>
					) : (
						<Input
							type='number'
							placeholder={'Update Individual Price'}
							id='individualPrice'
							name='individualPrice'
							handleChange={handleChange}
							value={updateForm?.individualPrice}
						/>
					)}
				</div>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<TbMoneybag size={25} />
						<label>Group Price</label>
					</div>
					{form ? (
						<Input
							type='number'
							placeholder={'Group Price'}
							id='groupPrice'
							name='groupPrice'
							handleChange={handleChange}
							value={updateForm?.groupPrice || form?.groupPrice}
						/>
					) : (
						<Input
							type='number'
							placeholder={'Update Group Price'}
							id='groupPrice'
							name='groupPrice'
							handleChange={handleChange}
							value={updateForm?.groupPrice}
						/>
					)}
				</div>
			</div>

			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
					<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<MdOutlineTitle size={25} />
								<label>Activity</label>
							</div>
							{form ? (
								<Input
									placeholder={'Activity title'}
									id='title'
									name='title'
									handleChange={handleChange}
									value={updateForm?.title || form?.title}
								/>
							) : (
								<Input
									placeholder={'Update title'}
									id='title'
									name='title'
									handleChange={handleChange}
									value={updateForm?.title}
								/>
							)}
						</div>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<RxActivityLog size={20} />
								<label>Video Link</label>
							</div>
							{form ? (
								<Input
									placeholder={'Video URL'}
									id='videoLink'
									name='videoLink'
									handleChange={handleChange}
									value={form?.videoLink}
								/>
							) : (
								<Input
									placeholder={'Update Video URL'}
									id='videoLink'
									name='videoLink'
									handleChange={handleChange}
									value={updateForm?.videoLink}
								/>
							)}
						</div>
					</div>
					<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<FiPackage size={25} />
								<label>Starter Pack</label>
							</div>
							{form ? (
								<Input
									placeholder={'Starter Pack'}
									id='starterPack'
									name='starterPack'
									handleChange={handleChange}
									value={form?.starterPack}
								/>
							) : (
								<Input
									placeholder={'Update Starter Pack'}
									id='starterPack'
									name='starterPack'
									handleChange={handleChange}
									value={updateForm?.starterPack}
								/>
							)}
						</div>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<LuCalendarCheck size={25} />
								<label>Start Time</label>
							</div>
							{form ? (
								<Input
									type='datetime-local'
									id='startTime'
									name='startTime'
									handleChange={handleChange}
									value={form?.startTime}
								/>
							) : (
								<Input
									type='datetime-local'
									id='startTime'
									name='startTime'
									handleChange={handleChange}
									value={updateForm?.startTime}
								/>
							)}
						</div>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<LuCalendarCheck size={25} />
								<label>End Time</label>
							</div>
							{form ? (
								<Input
									type='datetime-local'
									id='endTime'
									name='endTime'
									handleChange={handleChange}
									value={form?.endTime}
								/>
							) : (
								<Input
									type='datetime-local'
									id='endTime'
									name='endTime'
									handleChange={handleChange}
									value={updateForm?.endTime}
								/>
							)}
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
						placeholder={'Activity description'}
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

export default ActivityForm
