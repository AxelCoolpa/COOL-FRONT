import { RiDeleteBin5Line } from 'react-icons/ri'

interface Props {
	onClick: () => void
	size?: number
}

const DeleteButton: React.FC<Props> = ({ onClick, size }) => {
	return (
		<div
			onClick={onClick}
			className='relative hover:opacity-80 transition cursor-pointer z-10'
		>
			<RiDeleteBin5Line size={size || 30} />
		</div>
	)
}

export default DeleteButton
