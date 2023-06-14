import React from 'react'

import AvatarPlaceholder from '../assets/AvatarPlaceholder.jpg'

interface AvatarProps {
	avatar?: string
	alt?: string
	wh?: number
	borderR?: string
}

const Avatar: React.FC<AvatarProps> = ({ avatar, alt, wh, borderR }) => {
	return (
		<img
			src={avatar || AvatarPlaceholder}
			alt={alt}
			className={`
        object-cover 
        ${borderR ? `rounded-${borderR}` : 'rounded-full'}
        ${wh ? `w-${wh}` : 'w-24'}
        ${wh ? `h-${wh}` : 'h-24'}
        `}
		/>
	)
}

export default Avatar
