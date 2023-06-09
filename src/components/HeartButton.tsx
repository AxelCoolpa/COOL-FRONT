import { useState } from 'react'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface Props {
	size?: number
}

const HeartButton: React.FC<Props> = ({ size }) => {
	const [isFavorite, setIsFavorite] = useState(false)

	const iconSize = size
	const iconSecondarySize = size - 4

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite)
	}
	console.log(isFavorite)

	return (
		<div
			onClick={toggleFavorite}
			className='relative hover:opacity-80 transition cursor-pointer z-10'
		>
			<AiOutlineHeart
				size={iconSize || 50}
				className='fill-white absolute -top-[2px] -right-[2px]'
			/>
			<AiFillHeart
				size={iconSecondarySize || 46}
				className={isFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'}
			/>
		</div>
	)
}

export default HeartButton
