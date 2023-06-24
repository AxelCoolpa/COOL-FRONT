import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { BsTicketPerforated } from 'react-icons/bs'
import { CgInfinity } from 'react-icons/cg'
import { FaBed, FaMapMarkerAlt } from 'react-icons/fa'
import { GiWavyItinerary } from 'react-icons/gi'
import { GoHome } from 'react-icons/go'
import { GrSafariOption } from 'react-icons/gr'
import { RiCarFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/LoginSlice';

import { selectUsers } from '../../features/usersSlice'
import AvatarImg from '../../assets/Avatar.jpg'
import Cool from '../../assets/cool.png'
import withNotifications from '../../assets/withNotifications.svg'
import withoutNotifications from '../../assets/withoutNotifications.svg'
import Avatar from '../Avatar'
import Dropdown from '../dropdown/DropSidebar'

const Sidebar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const dispatch = useDispatch();
	const user = useSelector(selectUsers)
	const userProvider = user[1]

	const handleLogout = () => {
		dispatch(logout());
	  };
	const notifications = true

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	return (
		<div className='relative'>
			{/* Mobile Menu */}
			<div className='md:hidden flex items-center justify-end p-4'>
				<BiMenu className='text-2xl cursor-pointer' onClick={toggleMenu} />
			</div>

			{/* Desktop Sidebar */}
			<div className='fixed hidden md:flex md:flex-col h-full border rounded-tr-lg border-gray-300 shadow-2xl w-[200px] xl:w-[250px] transition'>
				<div className='flex items-center'>
					<img src={Cool} alt='Cool-LOGO' className='w-24 mt-12 ml-12 xl:ml-16' />
				</div>
				<nav className='flex-grow ml-2 xl:ml-4 sm:mt-6'>
					<ul className='space-y-3'>
						<li className='flex items-center w-fit pt-6 pl-4 gap-4 text-[#808080] hover:text-[#ce452a]'>
							<GoHome size={18} />
							<a href='/' className='font-semibold'>
								Home
							</a>
						</li>
						<li className='flex items-center w-fit pt-6 pl-4 gap-4 text-[#808080] hover:text-[#ce452a]'>
							<GrSafariOption size={18} />
							<a href='/adventure' className='font-semibold'>
								Adventure
							</a>
						</li>
						<li className='flex items-center w-fit pt-6 pl-4 gap-4 text-[#808080] hover:text-[#ce452a] '>
							<CgInfinity size={18} />
							<a href='/packages' className='font-semibold'>
								Package
							</a>
						</li>
						<li className='flex items-center w-fit pt-6 pl-4 gap-4 text-[#808080] hover:text-[#ce452a] '>
							<RiCarFill size={18} />
							<a href='/transport' className='font-semibold'>
								Transport
							</a>
						</li>
						<li className='flex items-center w-fit pt-6 pl-4 gap-4 text-[#808080] hover:text-[#ce452a] '>
							<FaBed size={18} />
							<a href='/accomodation' className='font-semibold'>
								Accomodation
							</a>
						</li>
						<li className='flex items-center w-fit pt-6 pl-4 gap-4 text-[#808080] hover:text-[#ce452a] '>
							<BsTicketPerforated size={18} />
							<a href='/tickets' className='font-semibold'>
								Tickets
							</a>
						</li>
						<li className='flex items-center w-fit pt-6 pl-4 gap-4 text-[#808080] hover:text-[#ce452a] '>
							<FaMapMarkerAlt size={18} />
							<a href='/maps' className='font-semibold'>
								Maps
							</a>
						</li>
					</ul>
				</nav>
				<div className='ml-2 xl:ml-6 mb-6 flex items-center justify-start gap-6'>
					{/* Avatar */}

					<ul className='relative ml-3 flex-col md:flex-row list-none items-center hidden md:flex'>
					<div className='flex items-center gap-3 xl:gap-6'>
								<Dropdown
									button={<Avatar avatar={AvatarImg} wh={12} />}
									children={
										<div className='flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl'>
											<div className='mt-3 ml-4'>
												<div className='flex flex-col gap-2'>
													<p className='text-sm font-bold cursor-default'>
														👋 Hey, {userProvider?.username}
													</p>
													<p className='text-sm pl-6 cursor-default'>
														{userProvider?.role?.roleName}
													</p>
												</div>
											</div>
											<div className='mt-3 mx-4 flex flex-col'>
												<div className='h-px w-full bg-gray-200' />
												<a
													href='#'
													className={
														'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
													}
													onClick={(e) => e.preventDefault()}
												>
													Another action
												</a>
												<a
													href='#'
													className={
														'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
													}
													onClick={(e) => e.preventDefault()}
												>
													Something else here
												</a>
												<div className='mt-3 h-px w-full bg-gray-200' />
												<a
													href='#'
													className={
														'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
													}
													onClick={(e) => e.preventDefault()}
												>
													<button className="mt-1 text-sm font-medium text-red-500 hover:text-red-500" onClick={handleLogout}>Logout</button>
												</a>
											</div>
										</div>
									}
									classNames={'py-3 bottom-6 -right-[210px] w-max'}
								/>
								<div className='hidden xl:flex flex-col justify-center'>
									<label className='2xl:text-lg font-semibold'>
										{userProvider?.username}
									</label>
									<span className='text-xs'>{userProvider?.role?.roleName}</span>
								</div>
								
							</div>
							</ul>


					<div>
						{notifications ? (
							<img
								src={withNotifications}
								alt='Notifications'
								className='hover:animate-bounce cursor-pointer'
							/>
						) : (
							<img
								src={withoutNotifications}
								alt='Notifications'
								className='cursor-pointer'
							/>
						)}
					</div>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{isMenuOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-60 z-10'>
					<div className='absolute top-0 right-0 p-4'>
						<BiMenu className='text-2xl text-white cursor-pointer' onClick={toggleMenu} />
					</div>
					<nav className='flex flex-col items-center justify-center h-screen'>
						<ul className='space-y-4'>
							<li className='flex items-center w-fit p-4 gap-2 text-white hover:text-gray-400'>
								<GoHome />
								<a href='/' className='font-semibold'>
									Home
								</a>
							</li>
							<li className='flex items-center w-fit p-4 gap-2 text-white hover:text-gray-400'>
								<GrSafariOption />
								<a href='/adventure' className='font-semibold'>
									Adventure
								</a>
							</li>
							<li className='flex items-center w-fit p-4 gap-2 text-white hover:text-gray-400'>
								<CgInfinity />
								<a href='/package' className='font-semibold'>
									Package
								</a>
							</li>
							<li className='flex items-center w-fit p-4 gap-2 text-white hover:text-gray-400'>
								<RiCarFill />
								<a href='/transport' className='font-semibold'>
									Transport
								</a>
							</li>
							<li className='flex items-center w-fit p-4 gap-2 text-white hover:text-gray-400'>
								<FaBed />
								<a href='/accommodation' className='font-semibold'>
									Accommodation
								</a>
							</li>
							<li className='flex items-center w-fit p-4 gap-2 text-white hover:text-gray-400'>
								<BsTicketPerforated />
								<a href='/tickets' className='font-semibold'>
									Tickets
								</a>
							</li>
							<li className='flex items-center w-fit p-4 gap-2 text-white hover:text-gray-400'>
								<FaMapMarkerAlt />
								<a href='/maps' className='font-semibold'>
									Maps
								</a>
							</li>
							<li className='flex items-center w-fit p-4 gap-2 text-white hover:text-gray-400'>
								<GiWavyItinerary />
								<a href='/itinarary' className='font-semibold'>
									Itinerary
								</a>
							</li>
						</ul>
					</nav>
				</div>
			)}
		</div>
	)
}

export default Sidebar
