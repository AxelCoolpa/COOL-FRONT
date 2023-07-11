import { TbProgressX } from 'react-icons/tb'

interface Props {
	onClick?: () => void
	size?: number
}

const DisableButton: React.FC<Props> = ({ onClick, size }) => {
	return (
		<div
			onClick={onClick}
			className='relative hover:opacity-80 transition cursor-pointer z-10'
		>
			<TbProgressX size={size || 30} />
		</div>
	)
}

export default DisableButton
