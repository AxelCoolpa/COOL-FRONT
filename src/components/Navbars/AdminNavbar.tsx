import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useCurrentUser } from '../../hooks/useCurrentUser'

import { FiBell, FiHeart, FiSearch } from 'react-icons/fi'
import { TbMessage } from 'react-icons/tb'
import { BsArrowBarUp, BsDot } from 'react-icons/bs'

import AvatarImg from '../../assets/Avatar.jpg'

import Cool from '../../assets/cool.png'
import Dropdown from '../dropdown/index'
import Avatar from '../Avatar'
import { logout } from '../../features/LoginSlice'

const Navbar: React.FC = () => {
	const { currentUser } = useCurrentUser()

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()

	const notifications = true

	const handleLogout = () => {
		dispatch(logout())
	}

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
								className='absolute hidden md:flex md:left-4 w-28 cursor-pointer ease-in-out transition'
								onClick={() => navigate('/admindash')}
							/>
						</div>
						{/* Actual Page */}
						<span className='text-sm hidden lg:inline-block font-semibold cursor-default'>
							<a className='text-sm text-navy-700 hover:underline' href='/admindash'>
								Pages
								<span className='mx-1 text-sm text-navy-700 hover:text-navy-700'>/</span>
							</a>
							<Link className='text-sm capitalize text-navy-700 hover:underline' to='#'>
								{location.pathname.split('/')[1]}
								{location.pathname.split('/').length > 2 &&
									` / ` + location.pathname.split('/')[2]}
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
									className='px-3 py-3 relative rounded-[20px] text-sm shadow-CooL w-full min-[1360px]:w-[350px] 2xl:w-[400px] pl-5 pr-12 active:border-none bborder-none focus:border-none'
								/>
							</div>
						</form>

						<div className='flex gap-9'>
							{/* start Notification */}

							<Dropdown
								button={
									<p className='cursor-pointer'>
										{notifications && (
											<div>
												<BsDot
													size={55}
													className='absolute text-[#FFC368] -top-6 -right-[26px]'
												/>
											</div>
										)}
										<TbMessage size={24} className='text-OrangeCooL' />
									</p>
								}
								animation='origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out'
								children={
									<div className='flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-CooL'>
										<div className='flex items-center justify-between py-4'>
											<p className='text-base font-bold'>Notification</p>
											<p className='text-sm font-bold'>Mark all read</p>
										</div>

										<button className='flex w-full items-center'>
											<div className='flex h-full w-[85px] items-center justify-center rounded-xl bg-OrangeToGreen py-4 text-2xl'>
												<BsArrowBarUp className='text-white' />
											</div>
											<div className='ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm'>
												<p className='mb-1 text-left text-base font-bold'>
													New Update: CooL is very Cool
												</p>
												<p className='font-base text-left text-xs'>
													New Update: CooL is very Cool
												</p>
											</div>
										</button>

										<button className='flex w-full items-center'>
											<div className='flex h-full w-[85px] items-center justify-center rounded-xl bg-OrangeToGreen py-4 text-2xl'>
												<BsArrowBarUp className='text-white' />
											</div>
											<div className='ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm'>
												<p className='mb-1 text-left text-base font-bold'>
													New Update: CooL is very Cool
												</p>
												<p className='font-base text-left text-xs'>
													New Update: CooL is very Cool
												</p>
											</div>
										</button>
									</div>
								}
								classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
							/>

							<Dropdown
								button={
									<p className='cursor-pointer'>
										{notifications && (
											<div>
												<BsDot
													size={55}
													className='absolute text-[#FFC368] -top-6 -right-[26px]'
												/>
											</div>
										)}
										<FiBell size={24} className='text-OrangeCooL' />
									</p>
								}
								children={
									<div className='flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-CooL'>
										<div
											style={{
												backgroundImage: `url(${AvatarImg})`,
												backgroundRepeat: 'no-repeat',
												backgroundSize: 'cover',
											}}
											className='mb-2 aspect-video w-full rounded-lg'
										/>
										<a
											href=' '
											className='px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-OrangeCooL py-[11px] font-bold transition duration-200'
										>
											CooL is very Cool
										</a>
										<a
											href=' '
											className='px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold transition duration-200'
										>
											CooL is very Cool
										</a>
										<a
											href=' '
											className='hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold transition duration-200'
										>
											CooL is very Cool
										</a>
									</div>
								}
								classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
								animation='origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out'
							/>

							<Dropdown
								button={
									<p className='cursor-pointer'>
										{notifications && (
											<div>
												<BsDot
													size={55}
													className='absolute text-[#FFC368] -top-6 -right-[26px] '
												/>
											</div>
										)}
										<FiHeart size={24} className='text-OrangeCooL' />
									</p>
								}
								children={
									<div className='flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-CooL'>
										<div
											style={{
												backgroundImage: `url(${AvatarImg})`,
												backgroundRepeat: 'no-repeat',
												backgroundSize: 'cover',
											}}
											className='mb-2 aspect-video w-full rounded-lg'
										/>
										<a
											href=' '
											className='px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-OrangeCooL py-[11px] font-bold transition duration-200 text-white'
										>
											CooL is very Cool
										</a>
										<a
											href=' '
											className='px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold transition duration-200'
										>
											CooL is very Cool
										</a>
										<a
											href=' '
											className='hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold transition duration-200'
										>
											CooL is very Cool
										</a>
									</div>
								}
								classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
								animation='origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out'
							/>
						</div>
						<hr className='w-12 rotate-90 hidden xl:block' />
						{/* User */}
						<ul className='relative flex-col md:flex-row list-none items-center hidden md:flex'>
							<div className='flex items-center gap-3 xl:gap-6'>
								<Dropdown
									button={<Avatar avatar={currentUser?.avatar || AvatarImg} wh={12} />}
									children={
										<div className='flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl'>
											<div className='mt-3 ml-4'>
												<div className='flex flex-col gap-2'>
													<p className='text-sm font-bold cursor-default'>
														👋 Hey, {currentUser?.firstName}
													</p>
												</div>
											</div>
											<div className='mt-3 mx-4 flex flex-col'>
												<div className='h-px w-full bg-gray-200' />
												<a
													href='/profile'
													className={
														'mt-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
													}
												>
													Profile
												</a>
												<a
													href='/'
													className={
														'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
													}
												>
													USER
												</a>
												<div className='mt-3 h-px w-full bg-gray-200' />
												<a
													href='#'
													className={
														'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
													}
													onClick={(e) => e.preventDefault()}
												>
													<button
														className='mt-1 text-sm font-medium text-red-500 hover:text-red-500'
														onClick={handleLogout}
													>
														Logout
													</button>
												</a>
											</div>
										</div>
									}
									classNames={'py-2 top-8 -left-[180px] w-max'}
								/>
								<div className='hidden xl:flex flex-col justify-center'>
									<label className='2xl:text-lg font-semibold'>
										{currentUser?.firstName}
									</label>
									<span className='text-xs'>#{currentUser?.role?.roleName}</span>
								</div>
								<div className=''>
									<select
										name='languaje'
										id='languaje'
										className='pr-4 shadow-CooL rounded-xl h-fit p-2'
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
