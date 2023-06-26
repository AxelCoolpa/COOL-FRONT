import { IconType } from 'react-icons'

interface InputProps {
	id?: string
	label?: string
	name?: string
	placeholder?: string
	type?: string
	disabled?: boolean
	required?: boolean
	errors?: boolean
	sizeH?: number
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
	icon?: IconType
	secondaryIcon?: IconType
}

const Input: React.FC<InputProps> = ({
	id,
	label,
	name,
	placeholder,
	type,
	disabled,
	errors,
	sizeH,
	handleChange,
	value,
	icon: Icon,
	secondaryIcon: SecondaryIcon,
}) => {
	return (
		<div className='w-full relative'>
			<input
				id={id}
				disabled={disabled}
				placeholder={placeholder || ' '}
				type={type}
				name={name}
				value={value}
				className={`
          peer
          w-full
					xl:w-4/5
					2xl:w-full
          p-4
					min-[1440px]:p-4
          font-light
          bg-white
          border-2
					rounded-lg
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
					${sizeH ? `h-${sizeH}` : ''}
          ${label ? 'pt-6' : 'pt-4'}
          ${errors ? 'border-red-700' : 'border-neutral-300'}
          ${errors ? 'focus:border-red-700' : 'focus:border-black'}
					${Icon ? 'pl-14' : ''}
        `}
				onChange={handleChange}
			/>
			{Icon && (
				<Icon
					size={28}
					className='absolute left-4 top-5 flex items-center justify-center text-OrangeCooL'
				/>
			)}

			{label && (
				<label
					className={`
          absolute
          duration-150
          transform
          -translate-y-5
          top-5
          origin-[0]
          left-4
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors ? 'text-red-700' : 'text-zinc-400'}
					${Icon ? 'pl-10' : ''}
        `}
				>
					{label}
				</label>
			)}

			{SecondaryIcon && (
				<SecondaryIcon
					size={28}
					className='absolute right-4 top-4 flex items-center justify-center '
				/>
			)}
		</div>
	)
}

export default Input
