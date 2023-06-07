import React from 'react'
import HeaderImg from '../../assets/headerImg.svg'
import Input from '../inputs/Input'

interface HeaderSectioonProps {
	title?: string
	subtitle?: string
	name?: string
	rate?: number
}

const HeaderSection: React.FC<HeaderSectioonProps> = ({
	title,
	subtitle,
	name,
	rate,
}) => {
	return (
		<div className='relative flex items-center justify-center'>
			<img src={HeaderImg} className='-z-10' />
			<div className='absolute flex flex-col items-center gap-5 text-white'>
				<h1 className='text-6xl font-bold'>{title}</h1>
				<h3 className='text-xl font-medium'>{subtitle}</h3>
			</div>
			<div className='absolute flex flex-col items-start gap-5 text-white'>
				<h2 className='text-3xl font-bold'>{name}</h2>
				<span className='text-xl font-medium'>{rate}</span>
			</div>
			<div className='absolute flex justify-between items-center w-11/12 p-10 bg-white shadow-black/30 shadow-lg -bottom-11 rounded-lg px-10'>
				<div className='flex flex-col  justify-center gap-2'>
					<span className='font-bold'>Location</span>
					<Input id='location' label='Location' />
				</div>
				<div className='flex flex-col  justify-center gap-2'>
					<span className='font-bold'>Start date</span>
					<Input id='starDate' label='---/-----/--' />
				</div>
				<div className='flex flex-col  justify-center gap-2'>
					<span className='font-bold'>Ending date</span>
					<Input id='endDate' label='---/-----/--' />
				</div>
				<div className='flex flex-col  justify-center  gap-2'>
					<span className='font-bold'>Peoples</span>
					<Input id='peoples' label='1 adult' />
				</div>
				<div className='bg-[#CE452A] w-[147px] h-[41px] gap-2 text-white rounded-lg text-center cursor-pointer'>
					<button className='font-bold p-2'>Search</button>
				</div>
			</div>
		</div>
	)
}

export default HeaderSection
