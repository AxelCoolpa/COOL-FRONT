import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { selectUsers } from '../../features/usersSlice'

import { FiBell, FiHeart, FiSearch } from 'react-icons/fi'
import { TbMessage } from 'react-icons/tb'
import { BsDot } from 'react-icons/bs'

import AvatarImg from '../../assets/Avatar.jpg'

import Cool from '../../assets/cool.png'
import UserDropdown from '../dropdown/UserDropdown'

const Navbar: React.FC = () => {
	const user = useSelector(selectUsers)
	const userProvider = user[1]

	const navigate = useNavigate()
	const location = useLocation()

	const notifications = true

	return (
		<>
			{/* Navbar */}
			<nav className='absolute hidden w-full md:fixed top-0 left-0 z-40 md:flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-5 backdrop-blur-xl'>
				<div className='w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4'>
					<div className='hidden md:flex justify-between items-center gap-36'>
						<div className='flex items-center'>
							<img
								src={Cool}
								alt='Cool-LOGO'
								className='absolute hidden min-[950px]:flex md:left-4 w-28 cursor-pointer ease-in-out transition'
								onClick={() => navigate('/proveedor-admin')}
							/>
						</div>
						{/* Actual Page */}
						<span className='text-sm hidden lg:inline-block font-semibold cursor-default'>
							<a className='text-sm text-navy-700 hover:underline' href=' '>
								Pages
								<span className='mx-1 text-sm text-navy-700 hover:text-navy-700'>/</span>
							</a>
							<Link className='text-sm capitalize text-navy-700 hover:underline' to='#'>
								{location.pathname.split('/').slice(-1)}
							</Link>
						</span>
					</div>
					{/* Form */}
					<div className='flex items-center justify-center gap-4'>
						<form className='md:flex hidden pl-10 flex-row flex-wrap items-center mr-3'>
							<div className='relative flex w-full flex-wrap'>
								<span className='z-10 absolute right-5 py-3'>
									<FiSearch className='text-OrangeCooL text-xl' />
								</span>
								<input
									type='search'
									placeholder='Search'
									className='px-3 py-3 relative rounded-[20px] text-sm shadow-CooL w-full xl:w-[350px] 2xl:w-[400px] pl-5 pr-12 active:border-none bborder-none focus:border-none'
								/>
							</div>
						</form>

						<div className='flex gap-9'>
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
											className='absolute text-[#FFC368] -top-6 -right-[26px]'
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
						<hr className='w-12 rotate-90' />
						{/* User */}
						<ul className='flex-col md:flex-row list-none items-center hidden md:flex'>
							<div className='flex items-center gap-6'>
								<UserDropdown avatar={AvatarImg} />
								<div className='flex flex-col justify-center'>
									<label className='2xl:text-lg font-semibold'>
										{userProvider?.username}
									</label>
									<span className='text-xs'>{userProvider?.role?.roleName}</span>
								</div>
								<div className=''>
									<select
										name='languaje'
										id='languaje'
										className='pr-4 shadow-CooL rounded-xl h-fit p-2 ml-5'
									>
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
