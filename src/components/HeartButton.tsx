import { useState } from 'react'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const HeartButton = () => {
	const [isFavorite, setIsFavorite] = useState(false)

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite)
	}

	return (
		<div
			onClick={toggleFavorite}
			className='relative hover:opacity-80 transition cursor-pointer'
		>
			<AiOutlineHeart size={50} className='fill-white absolute -top-[2px] -right-[2px]' />
			<AiFillHeart
				size={46}
				className={isFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'}
			/>
		</div>
	)
}

export default HeartButton
