interface InputProps {
	id?: string
	label?: string
	placeholder?: string
	type?: string
	disabled?: boolean
	required?: boolean
	errors?: boolean
	sizeH?: number
}

const Input: React.FC<InputProps> = ({
	id,
	label,
	placeholder,
	type,
	disabled,
	errors,
	sizeH,
}) => {
	return (
		<div className='w-full relative'>
			<input
				id={id}
				disabled={disabled}
				placeholder={placeholder || ' '}
				type={type}
				className={`
          peer
          w-full
          p-4
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
