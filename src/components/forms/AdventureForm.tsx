import React from 'react'

import { CgInfo } from 'react-icons/cg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdOutlineTitle } from 'react-icons/md'
import { TbFileDescription } from 'react-icons/tb'

import { createAdventureFormData } from '../../features/createAdventureSlice'

import Input from '../inputs/Input'

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

			<div className='flex flex-col gap-10 w-full h-full'>
				<div className='flex items-center gap-5 text-[#686868]'>
					<TbFileDescription size={25} />
					<label>Description</label>
				</div>
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

export default AdventureForm
