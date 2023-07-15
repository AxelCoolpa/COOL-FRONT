import React, { ReactNode } from 'react'
import Select from 'react-select'

interface Pops {
	options: any
	value: any
	onChange: any
	formatOptionLabel: (option: any) => ReactNode
}

const SelectDestination: React.FC<Pops> = ({
	options,
	value,
	onChange,
	formatOptionLabel,
}) => {
	return (
		<div>
			<Select
				options={options}
				value={value}
				onChange={onChange}
				placeholder='Select an option'
				isClearable
				formatOptionLabel={formatOptionLabel}
				styles={{
					control: (provided: any) => ({
						...provided,
						width: '100%',
						height: '20px',
						minHeight: '60px',
						borderRadius: '10px',
					}),
					singleValue: (provided: any) => ({
						...provided,
						display: 'flex',
						alignItems: 'center',
					}),
				}}
				theme={(theme) => ({
					...theme,
					borderRadius: 6,
					colors: {
						...theme.colors,
						primary: 'white',
						primary25: '#ce452a60',
					},
				})}
			/>
		</div>
	)
}

export default SelectDestination
