import { IconType } from 'react-icons'

interface CategoryInputProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	icon: IconType
	label: string
	id: string
	name: string
	value: string
}

const CategoryInput: React.FC<CategoryInputProps> = ({
	icon: Icon,
	label,
	handleChange,
	id,
	name,
	value,
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
				/>
				<label
					for={id}
					className='flex flex-col items-center justify-center gap-3 w-44 h-44 p-5 border border-[#F3F3F3] hover:border-[#28B446] hover:border-4 rounded-[20px] cursor-pointer peer-checked:border-[#28B446] peer-checked:border-[4px] peer-checked:shadow-xl peer-checked:shadow-black/20'
				>
					<Icon size={36} />

					<div className='font-semibold'>{label}</div>
				</label>
			</li>
		</>
	)
}

export default CategoryInput
