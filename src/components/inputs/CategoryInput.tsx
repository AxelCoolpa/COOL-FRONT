import React from 'react'
import { IconType } from 'react-icons'

interface CategoryInputProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	icon?: IconType
	label: string
	id?: string
	name?: string
	value?: string
	iconColor?: string
	bgColor?: string
	secondaryBorderColor?: boolean
	checked?: any
}

const CategoryInput: React.FC<CategoryInputProps> = ({
	icon: Icon,
	label,
	handleChange,
	id,
	name,
	value,
	bgColor,
	iconColor,
	secondaryBorderColor,
	checked,
}) => {
	return (
		<>
			<li>
				<input
					onChange={handleChange}
					type='checkbox'
					id={id}
					name={name}
					value={value}
					className='hidden peer'
					checked={checked ? checked.includes(label) : null}
				/>

				<label
					htmlFor={id}
					className={`
						p-5 
						w-44 
						flex 
						gap-3 
						border 
						flex-col 
						items-center 
						justify-center 
						hover:border-4 
						rounded-[20px] 
						cursor-pointer 
						border-[#F3F3F3] 
						peer-checked:shadow-xl 
						peer-checked:border-[4px] 
						${secondaryBorderColor ? 'hover:border-OrangeCooL' : 'hover:border-[#28B446]'}
						${
							secondaryBorderColor
								? 'peer-checked:border-OrangeCooL'
								: 'peer-checked:border-[#28B446]'
						}
						peer-checked:shadow-black/20 
						${!Icon ? 'h-20' : 'h-44'}
					`}
				>
					{Icon && <Icon size={36} color={iconColor} />}

					<div className='font-semibold'>{label}</div>
				</label>
			</li>
		</>
	)
}

export default CategoryInput
