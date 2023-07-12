import { TbEdit } from 'react-icons/tb'

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
			<TbEdit size={size || 30} />
		</div>
	)
}

export default EditButon
