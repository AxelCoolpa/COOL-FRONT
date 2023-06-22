import React from 'react'

import { IconType } from 'react-icons'

interface CategoryBoxProps {
	icon: IconType
	label: string
	description?: string
	selected?: boolean
	onSelect?: string
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label }) => {
	return (
		<div
			onClick={() => alert(label)}
			className='flex flex-col items-center justify-center rounded-[20px] border border-[#F3F3F3] w-44 h-44 gap-3 hover:border-[#28B446] hover:border-4 transition cursor-pointer'
		>
			<Icon size={28} />
			<div className='text-sm font-semibold'>{label}</div>
		</div>
	)
}

export default CategoryBox
