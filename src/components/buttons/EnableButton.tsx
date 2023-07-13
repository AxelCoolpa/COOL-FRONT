import { TbProgressCheck } from 'react-icons/tb'

interface Props {
	onClick?: () => void
	size?: number
}

const EnableButton: React.FC<Props> = ({ onClick, size }) => {
	return (
		<div
			onClick={onClick}
			className='relative hover:opacity-80 transition cursor-pointer z-10'
		>
			<TbProgressCheck size={size || 30} />
		</div>
	)
}

export default EnableButton
