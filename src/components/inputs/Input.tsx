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
					xl:p-2
					min-[1440px]:p-4
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
					${sizeH ? `h-${sizeH}` : ''}
          ${label ? 'pt-6' : 'pt-4'}
          ${errors ? 'border-red-700' : 'border-neutral-300'}
          ${errors ? 'focus:border-red-700' : 'focus:border-black'}
        `}
				onChange={handleChange}
			/>
			{label && (
				<label
					className={`
          absolute
          text-md
          duration-150
          transform
          -translate-y-3
          top-5
          z-10
          origin-[0]
          left-4
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors ? 'text-red-700' : 'text-zinc-400'}
        `}
				>
					{label}
				</label>
			)}
		</div>
	)
}

export default Input
