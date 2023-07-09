'use client'

import { IconType } from 'react-icons'

interface ButtonProps {
	label: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
	disabled?: boolean
	outline?: boolean
	card?: boolean
	small?: boolean
	icon?: IconType
	w?: number
	type?: string
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	outline,
	card,
	small,
	icon: Icon,
	w,
	type,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			type={type}
			className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        hover:opacity-90
        transition
				p-4
				mt-5
				xl:text-lg
        ${w ? `w-${w}` : 'w-full'}
        ${card ? 'rounded-3xl' : 'rounded-lg'}
        ${outline ? 'bg-[#EFEFEF]' : 'bg-OrangeCooL'}
        ${outline ? 'border-none' : 'bg-OrangeCooL'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'py-1' : 'py-4'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-bold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
		>
			{Icon && <Icon size={24} className='absolute left-4 top-3' />}
			{label}
		</button>
	)
}

export default Button
