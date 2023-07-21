import React from 'react'

import { MdOutlineTitle } from 'react-icons/md'
import { TbFileDescription } from 'react-icons/tb'

import { createAdventureFormData } from '../../features/createAdventureSlice'
import { updateAdventureFormData } from '../../features/updateAdventureSlice'

import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'

interface AddAdventureFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	form?: createAdventureFormData
	updateForm?: updateAdventureFormData
}

const AdventureForm: React.FC<AddAdventureFormProps> = ({
	handleChange,
	form,
	updateForm,
}) => {
	return (
		<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<MdOutlineTitle size={25} />
						<label>Adventure</label>
					</div>
					{form ? (
						<Input
							placeholder={'Adventure Name'}
							id='title'
							name='title'
							handleChange={handleChange}
							value={form?.title}
						/>
					) : (
						<Input
							placeholder={'Update Title'}
							id='title'
							name='title'
							handleChange={handleChange}
							value={updateForm?.title}
						/>
					)}
				</div>
			</div>

			<div className='flex flex-col gap-10 w-full h-full'>
				<div className='flex items-center gap-5 text-[#686868]'>
					<TbFileDescription size={25} />
					<label>Description</label>
				</div>
				{form ? (
					<Textarea
						placeholder={'Adventure description'}
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

export default AdventureForm
