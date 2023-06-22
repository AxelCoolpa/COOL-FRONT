import { AiOutlineHeart } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

interface Props {
	onClick: () => void
	size?: number
}

const EditButon: React.FC<Props> = ({ onClick, size }) => {
	const iconSecondarySize = size - 4

	return (
		<div
			onClick={onClick}
			className='relative hover:opacity-80 transition cursor-pointer z-10'
		>
			<FiEdit size={size || 30} className='text-white absolute -top-[2px] -right-[2px]' />
			<FiEdit
				size={iconSecondarySize || 26}
				className='fill-neutral-500/70 text-neutral-500/70'
			/>
		</div>
	)
}

export default EditButon
