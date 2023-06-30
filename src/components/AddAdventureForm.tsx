import React from 'react'

import { CgInfo } from 'react-icons/cg'
import { BiKey } from 'react-icons/bi'
import { LuCalendarCheck } from 'react-icons/lu'

import Input from './inputs/Input'
import { FaRegUser } from 'react-icons/fa'

const AddAdventureForm = () => {
	return (
		<div className='col-span-5 flex flex-col gap-12'>
			<div className='flex flex-row gap-8 2xl:gap-32'>
				<div className='flex items-center gap-2'>
					<div className='w-80 2xl:w-96'>
						<Input label='Price adventure indivial' id='individualPrice' />
					</div>
					<CgInfo size={50} color='#FFBC39' style={{ cursor: 'pointer' }} />
				</div>
				<div className='w-80 2xl:w-96'>
					<Input label='Price adventure groups' id='groupPrice' />
				</div>
			</div>
			<div className='flex flex-col 2xl:flex-row gap-10'>
				<div className='flex items-center justify-center bg-OrangeToGreen rounded-full w-36 h-36'>
					<div className='-scale-x-100'>
						<BiKey size={60} color='white' />
					</div>
				</div>
				<div className='flex gap-8'>
					<div className='flex flex-col gap-10 2xl:w-64'>
						<label className='text-OrangeCooL'>Adventure ID #0052466623</label>
						<Input label='Title adventure' />
					</div>
					<div className='flex flex-col gap-10 w-56 text-[#898989]'>
						<div className='flex items-center gap-5 text-[#686868]'>
							<FaRegUser size={25} />
							<label className=''>People with disabilities?</label>
						</div>
						<select
							name='disabilitiesPeople'
							id='disabilitiesPeople'
							className='peer w-full p-5 font-light bg-white border-2 rounded-md outline-none transition border-neutral-300 focus:border-black'
						>
							<option value='yes'>Yes</option>
							<option value='No'>No</option>
						</select>
					</div>
					<div className='flex flex-col gap-10 lg:w-fit xl:w-56 text-[#898989]'>
						<div className='flex items-center gap-5 text-[#686868] '>
							<LuCalendarCheck size={25} />
							<label className='text-[#686868]'>Booking Date</label>
						</div>
						<select
							name='calendary'
							id='calendary'
							className='peer w-full p-5 font-light bg-white border-2 rounded-md outline-none transition border-neutral-300 focus:border-black'
						>
							<option value='yes'>Calendary</option>
						</select>
					</div>
				</div>
			</div>
			<div className='w-full min-[1920px]:w-[86%]'>
				<Input label='Adventure description' sizeH={36} />
			</div>
		</div>
	)
}

export default AddAdventureForm
