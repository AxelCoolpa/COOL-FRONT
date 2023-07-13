import { TbTrash } from 'react-icons/tb'

interface Props {
	onClick?: () => void
	size?: number
}

const DeleteButton: React.FC<Props> = ({ onClick, size }) => {
	return (
		<div
			onClick={onClick}
			className='relative hover:opacity-80 transition cursor-pointer z-10'
		>
			<TbTrash size={size || 30} />
		</div>
	)
}

export default DeleteButton
