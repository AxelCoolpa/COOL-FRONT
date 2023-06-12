import React from 'react'

import AvatarPlaceholder from '../assets/AvatarPlaceholder.jpg'

interface AvatarProps {
	avatar?: string
	alt?: string
	wh?: number
}

const Avatar: React.FC<AvatarProps> = ({ avatar, alt, wh }) => {
	return (
		<img
			src={avatar || AvatarPlaceholder}
			alt={alt}
			className={`
        object-cover 
        rounded-full
        ${wh ? `w-${wh}` : 'w-12'}
        ${wh ? `h-${wh}` : 'h-12'}
        `}
		/>
	)
}

export default Avatar
