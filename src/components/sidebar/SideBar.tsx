import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { BsTicketPerforated } from 'react-icons/bs'
import { CgInfinity } from 'react-icons/cg'
import { FaBed, FaMapMarkerAlt } from 'react-icons/fa'
import { GiWavyItinerary } from 'react-icons/gi'
import { GoHome } from 'react-icons/go'
import { GrSafariOption } from 'react-icons/gr'
import { RiCarFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/LoginSlice';

import { user1 } from '../../mocks/listingsUser'

import Cool from '../../assets/cool.png'
import withNotifications from '../../assets/withNotifications.svg'
import withoutNotifications from '../../assets/withoutNotifications.svg'
import Avatar from '../Avatar'

const Sidebar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const dispatch = useDispatch();
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

					<div className='flex items-center justify-start'>
					<button onClick={handleLogout}>Logout</button>
						<div className='object-cover rounded-full mr-3 cursor-pointer'>
							<Avatar avatar={user1.avatar} alt={user1.name} wh={12} />
						</div>
						<div className='ml-2'>
							<p className='text-sm font-medium'>{`${user1.name} ${user1.lastName}`}</p>
							<p className='text-xs'>{`@${user1.userName}`}</p>
						</div>
					</div>
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
