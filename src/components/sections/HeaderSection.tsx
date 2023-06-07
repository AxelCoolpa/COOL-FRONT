import React from 'react'
import HeaderImg from '../../assets/headerImg.svg'
import Input from '../inputs/Input'

const HeaderSection = () => {
	return (
		<div className='relative flex items-center justify-center w-4/5'>
			<img src={HeaderImg} className='w-full -z-10' />
			<div className='absolute flex flex-col items-center gap-5 text-white'>
				<h1 className='text-6xl font-bold'>Where do you want to go ?</h1>
				<h3 className='text-xl font-medium'>
					Explore the best destinations in the world
				</h3>
			</div>
			<div className='absolute flex justify-between items-center w-11/12 h-[20vh] 2xl:w-9/12 2xl:h-[15vh] bg-white shadow-black/30 shadow-lg -bottom-11 rounded-lg z-10 px-10'>
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
