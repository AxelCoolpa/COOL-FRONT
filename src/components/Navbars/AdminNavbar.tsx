import React from 'react'
import { FiBell, FiHeart, FiSearch } from 'react-icons/fi'

import Cool from '../../assets/cool.png'
import UserDropdown from '../dropdown/UserDropdown'
import { useNavigate } from 'react-router-dom'
import { TbMessage } from 'react-icons/tb'
import { BsDot } from 'react-icons/bs'
import { provider1 } from '../../mocks/listingsProvider'

const Navbar: React.FC = () => {
	const navigate = useNavigate()

	const notifications = true

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

						<div className='flex items-stretch pl-6 pr-6 gap-9'>
							<div className='relative cursor-pointer' onClick={() => alert('Mensajes')}>
								{notifications && (
									<div>
										<BsDot
											size={55}
											className='absolute text-[#FFC368] -top-6 -right-[26px] '
										/>
									</div>
								)}
								<TbMessage size={24} className='text-OrangeCooL' />
							</div>
							<div
								className='relative cursor-pointer'
								onClick={() => alert('Notificaciones')}
							>
								{notifications && (
									<div>
										<BsDot
											size={55}
											className='absolute text-[#FFC368] -top-6 -right-[26px] '
										/>
									</div>
								)}
								<FiBell size={24} className='text-OrangeCooL' />
							</div>
							<div className='relative cursor-pointer' onClick={() => alert('Favoritos')}>
								{notifications && (
									<div>
										<BsDot
											size={55}
											className='absolute text-[#FFC368] -top-6 -right-[26px] '
										/>
									</div>
								)}
								<FiHeart size={24} className='text-OrangeCooL' />
							</div>
						</div>
						{/* User */}
						<ul className='flex-col md:flex-row list-none items-center hidden md:flex'>
							<div className='flex items-center gap-10'>
								<UserDropdown />
								<div className='flex flex-col justify-center'>
									<label className='2xl:text-lg font-semibold'>{provider1.name}</label>
									<span className='text-xs'>{provider1.role}</span>
								</div>
								<div className='shadow-CooL rounded-xl h-fit p-2'>
									<select name='languaje' id='languaje' className='pr-4'>
										<option value='EN'>EN</option>
										<option value='ES'>ES</option>
									</select>
								</div>
							</div>
						</ul>
					</div>
				</div>
			</nav>
			{/* End Navbar */}
		</>
	)
}

export default Navbar
