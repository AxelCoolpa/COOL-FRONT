import React from 'react'
import { FiBell, FiHeart, FiSearch } from 'react-icons/fi'

import Cool from '../../assets/cool.png'
import UserDropdown from '../dropdown/UserDropdown'
import { useNavigate } from 'react-router-dom'
import { TbMessage } from 'react-icons/tb'

const Navbar: React.FC = () => {
	const navigate = useNavigate()
	return (
		<>
			{/* Navbar */}
			<nav className='absolute md:fixed top-0 left-0 w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center p-5 bg-white'>
				<div className='w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4'>
					<div className='flex justify-between items-center gap-48'>
						<div className='flex items-center'>
							<img
								src={Cool}
								alt='Cool-LOGO'
								className='absolute md:left-4 w-28 cursor-pointer'
								onClick={() => navigate('/proveedor-admin')}
							/>
						</div>
						{/* Actual Page */}
						<span className='text-sm xl:text-xl hidden lg:inline-block font-semibold cursor-default'>
							Dashboard
						</span>
					</div>
					{/* Form */}
					<div className='flex items-center justify-center gap-14'>
						<form className='md:flex hidden pl-10 flex-row flex-wrap items-center lg:ml-auto mr-3'>
							<div className='relative flex w-full flex-wrap items-stretch'>
								<span className='z-10 h-full leading-snug font-normal absolute right-5 text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3'>
									<FiSearch className='text-OrangeCooL text-xl' />
								</span>
								<input
									type='text'
									placeholder='Search...'
									className=' px-3 py-3 relative bg-white rounded-[20px] text-sm xl:text-base shadow focus:border focus:border-black w-full md:w-[300px] lg:w-[350px] 2xl:w-[500px] pl-5 transition'
								/>
							</div>
						</form>

						<div className='flex flex-wrap items-stretch pl-6 pr-6 gap-9'>
							<div className='relative'>
								<TbMessage size={24} className='text-OrangeCooL' />
							</div>
							<div className='relative'>
								<FiBell size={24} className='text-OrangeCooL' />
							</div>
							<div className='relative'>
								<FiHeart size={24} className='text-OrangeCooL' />
							</div>
						</div>
						{/* User */}
						<ul className='flex-col md:flex-row list-none items-center hidden md:flex'>
							<UserDropdown />
						</ul>
					</div>
				</div>
			</nav>
			{/* End Navbar */}
		</>
	)
}

export default Navbar
