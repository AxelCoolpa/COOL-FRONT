import { IconType } from 'react-icons'

interface ButtonProps {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
	label?: string
	placeholder?: string
	icon?: IconType
	labelClassName?: string
	buttonClassName?: string
}

const ProfileButton: React.FC<ButtonProps> = ({
	onClick,
	label,
	placeholder,
	icon: Icon,
	labelClassName,
	buttonClassName,
}) => {
	return (
		<button
			onClick={onClick}
			placeholder={placeholder}
			className={`
				${buttonClassName}
				relative
				w-full
				flex
				items-center
        transition
				p-5
				border
				border-#E8E8E8
				rounded-[20px]
				${Icon ? 'justify-between' : 'justify-center'}
      `}
		>
			<label className={`${labelClassName} flex cursor-pointer font-medium`}>
				{label}
			</label>
			{Icon && <Icon size={24} className='' />}
		</button>
	)
}

export default ProfileButton
