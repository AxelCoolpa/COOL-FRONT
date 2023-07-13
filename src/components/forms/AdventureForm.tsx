import React from 'react'

import { MdOutlineTitle } from 'react-icons/md'
import { TbFileDescription } from 'react-icons/tb'

import { createAdventureFormData } from '../../features/createAdventureSlice'
import { updateAdventureFormData } from '../../features/updateAdventureSlice'

import Input from '../inputs/Input'

interface AddAdventureFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	form?: createAdventureFormData
	updateForm?: updateAdventureFormData
	data?: {
		title: string
		description: string
	}
}

const AdventureForm: React.FC<AddAdventureFormProps> = ({
	handleChange,
	form,
	updateForm,
	data,
}) => {
	return (
		<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<MdOutlineTitle size={25} />
						<label>Adventure</label>
					</div>
					<Input
						placeholder={data?.title || 'Adventure Name'}
						id='title'
						name='title'
						handleChange={handleChange}
						value={updateForm?.title || form?.title}
					/>
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
						data?.description ? 'Update Adventure description' : 'Adventure description'
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

export default AdventureForm
