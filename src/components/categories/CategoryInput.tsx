import { IconType } from 'react-icons'

interface CategoryInputProps {
	icon: IconType
	label: string
	onClick: () => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({ icon: Icon, label, onClick }) => {
	return (
		<div
			onClick={() => onClick()}
			className='flex flex-col items-center justify-center rounded-[20px] border border-[#F3F3F3] w-44 h-44 gap-3 hover:border-[#28B446] hover:border-4 transition cursor-pointer'
		>
			<Icon size={36} />
			<div className='font-semibold'>{label}</div>
		</div>
	)
}

export default CategoryInput
