import { IconType } from 'react-icons'

interface CategoryInputProps {
	icon: IconType
	label: string
	selected: boolean
	onSelect: (value: string) => void
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({
	icon: Icon,
	label,
	selected,
	onSelect,
	handleChange,
}) => {
	return (
		<div
			onClick={() => onSelect(label)}
			onChange={handleChange}
			className={`
        flex
        flex-col
        items-center
				justify-center
        rounded-[20px]
        gap-3
				w-44
				h-44
        border
        hover:border-[#28B446]
        hover:border-4
        transition
        cursor-pointer        
        ${selected ? 'border-[#28B446]' : 'border-[#F3F3F3]'}
        ${selected ? 'border-4' : 'border'}
        ${selected ? 'shadow-xl shadow-black/20' : 'shadow-none'}
      `}
		>
			<Icon size={36} />
			<div className='font-semibold'>{label}</div>
		</div>
	)
}

export default CategoryInput
