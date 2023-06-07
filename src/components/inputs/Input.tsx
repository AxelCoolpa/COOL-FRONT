interface InputProps {
	id?: string
	label?: string
	type?: string
	disabled?: boolean
	required?: boolean
}

const Input: React.FC<InputProps> = ({ id, label, type, disabled, required }) => {
	return (
		<div className='w-full relative'>
			<input
				id={id}
				placeholder={label}
				type={type}
				disabled={disabled}
				required={required}
				className='border border-[#E8ECF4] bg-[#F7F8F9] p-2 w-[144px] h-[49px] rounded-lg  outline-none transition disabled:opacity-70 disabled:cursor-not-allowed focus:border-black'
			/>
		</div>
	)
}

export default Input
