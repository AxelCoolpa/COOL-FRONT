import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { BsTicketPerforated } from 'react-icons/bs'
import { CgInfinity } from 'react-icons/cg'
import { FaBed, FaMapMarkerAlt } from 'react-icons/fa'
import { GiWavyItinerary } from 'react-icons/gi'
import { GoHome } from 'react-icons/go'
import { GrSafariOption } from 'react-icons/gr'
import { RiCarFill } from 'react-icons/ri'

import Cool from '../assets/cool.png'
import avatar from '../assets/background-Cool.jpeg'
import withNotifications from '../assets/withNotifications.svg'
import withoutNotifications from '../assets/withoutNotifications.svg'

const user = {
	userName: 'john03',
	name: 'John',
	lastName: 'Doe',
	mail: 'john.doe@example.com',
	avatar: avatar,
}

const Sidebar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const notifications = false

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	return (
		<div className='relative'>
			{/* Mobile Menu */}
			<div className='sm:hidden flex items-center justify-end p-4'>
				<BiMenu className='text-2xl cursor-pointer' onClick={toggleMenu} />
			</div>

			{/* Desktop Sidebar */}
			<div className='fixed hidden sm:flex sm:flex-col md:flex md:flex-col h-full border rounded-tr-lg border-gray-300 shadow-2xl w-1/5  lg:w-1/6'>
				<div className='sm:w-1/4 md:w-[15vw] flex items-center justify-center'>
					<img src={Cool} alt='Cool-LOGO' className='w-20 mt-12' />
				</div>
				<nav className='flex-grow ml-4 sm:mt-4 md:mt-0'>
					<ul className='space-y-2'>
						<li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6  gap-2 text-[#808080] hover:text-[#ce452a]'>
							<GoHome />
							<a href='#' className='font-semibold'>
								Home
							</a>
						</li>
						<li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6  gap-2 text-[#808080] hover:text-[#ce452a]'>
							<GrSafariOption />
							<a href='#' className='font-semibold'>
								Adventure
							</a>
						</li>
						<li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
							<CgInfinity />
							<a href='#' className='font-semibold'>
								Package
							</a>
						</li>
						<li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6  gap-2 text-[#808080] hover:text-[#ce452a] '>
							<RiCarFill />
							<a href='#' className='font-semibold'>
								Transport
							</a>
						</li>
						<li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
							<FaBed />
							<a href='#' className='font-semibold'>
								Accommodation
							</a>
						</li>
						<li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
							<BsTicketPerforated />
							<a href='#' className='font-semibold'>
								Tickets
							</a>
						</li>
						<li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
							<FaMapMarkerAlt />
							<a href='#' className='font-semibold'>
								Maps
							</a>
						</li>
						<li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
							<GiWavyItinerary />
							<a href='/itinerary' className='font-semibold'>
								Itinarary
							</a>
						</li>
					</ul>
				</nav>
				<div className='p-4 mb-6 flex items-center justify-around'>
					{/* Avatar */}
					<div className='flex items-center justify-start'>
						<img
							src={user.avatar}
							alt='User Avatar'
							className='w-12 h-12 rounded-full mr-3 cursor-pointer'
						/>
						<div className='ml-2'>
							<p className='text-sm font-medium'>{`${user.name} ${user.lastName}`}</p>
							<p className='text-xs'>{`@${user.userName}`}</p>
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
				<div className='fixed inset-0 bg-black bg-opacity-50 z-10'>
					<div className='absolute top-0 right-0 p-4'>
						<BiMenu className='text-2xl text-white cursor-pointer' onClick={toggleMenu} />
					</div>
					<nav className='flex flex-col items-center justify-center h-screen'>
						<ul className='space-y-4'>
							<li className='p-4'>
								<a href='#' className='text-white hover:text-gray-400'>
									Home
								</a>
							</li>
							<li className='p-4'>
								<a href='#' className='text-white hover:text-gray-400'>
									Adventure
								</a>
							</li>
							<li className='p-4'>
								<a href='#' className='text-white hover:text-gray-400'>
									Package
								</a>
							</li>
							<li className='p-4'>
								<a href='#' className='text-white hover:text-gray-400'>
									Transport
								</a>
							</li>
							<li className='p-4'>
								<a href='#' className='text-white hover:text-gray-400'>
									Accommodation
								</a>
							</li>
							<li className='p-4'>
								<a href='#' className='text-white hover:text-gray-400'>
									Tickets
								</a>
							</li>
							<li className='p-4'>
								<a href='#' className='text-white hover:text-gray-400'>
									Maps
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
