import { FiEdit } from 'react-icons/fi'

interface Props {
	onClick: () => void
	size?: number
}

const EditButon: React.FC<Props> = ({ onClick, size }) => {
	return (
		<div
			onClick={onClick}
			className='relative hover:opacity-80 transition cursor-pointer z-10'
		>
			<FiEdit size={size || 30} />
		</div>
	)
}

export default EditButon
