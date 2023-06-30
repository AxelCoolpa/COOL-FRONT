import { CiMenuKebab } from 'react-icons/ci'

interface Props {
	onClick?: () => void
	size?: number
}

const MoreOptionsButton: React.FC<Props> = ({ onClick, size }) => {
	return (
		<div
			onClick={onClick}
			className='relative hover:opacity-80 transition cursor-pointer z-10'
		>
			<CiMenuKebab
				size={size || 30}
				className='text-white absolute -top-[2px] -right-[2px]'
			/>
			<CiMenuKebab
				size={size || 26}
				className='fill-neutral-500/70 text-neutral-500/70'
			/>
		</div>
	)
}

export default MoreOptionsButton
