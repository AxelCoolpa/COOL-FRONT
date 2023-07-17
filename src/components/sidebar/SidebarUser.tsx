/*eslint-disable*/
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import styles from '../../styles/Global'
import Cool from '../../assets/cool.png'
import AvatarPlaceholderImg from '../../assets/AvatarPlaceholder.jpg'

import { BiMenu } from 'react-icons/bi'
import { BsTicketPerforated } from 'react-icons/bs'
import { FaBed, FaMapMarkerAlt } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { RiCarFill } from 'react-icons/ri'
import { CgInfinity } from 'react-icons/cg'
import { GoHome } from 'react-icons/go'
import { GrSafariOption } from 'react-icons/gr'

import { useCurrentUser } from '../../hooks/useCurrentUser'
import { logout } from '../../features/LoginSlice'

import Dropdown from '../dropdown/index'
import Avatar from '../Avatar'

export default function SidebarUser() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { currentUser } = useCurrentUser()

	const handleLogout = () => {
		dispatch(logout())
	}

	const [collapseShow, setCollapseShow] = React.useState('hidden')

	return (
		<>
			<nav className={`${styles.nav}`}>
				<div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap justify-between items-center w-full mx-auto'>
					{/* Toggler */}
					<button
						className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
						type='button'
						onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
					>
						<BiMenu />
					</button>
					{/* Brand */}
					<div className='md:hidden'>
						<img
							src={Cool}
							alt='Cool-LOGO'
							className='w-28 cursor-pointer'
							onClick={() => navigate('/provider')}
						/>
					</div>

					{/* User */}

					<div className='md:hidden items-center flex flex-wrap list-none'>
						{/* PROFILE / SETTINGS */}
						<Dropdown
							button={
								<Avatar avatar={currentUser?.avatar || AvatarPlaceholderImg} wh={12} />
							}
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
										<Link
											to='profile'
											className={
												'mt-3 text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
											}
										>
											Profile
										</Link>
										<a
											href='provider'
											className={
												'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
											}
										>
											PROVIDER USER
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
					</div>

					{/* Collapse */}
					<div
						className={
							'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
							collapseShow
						}
					>
						{/* Collapse header */}
						<div className='md:min-w-md md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
							<div className='w-6/12 flex relative'>
								<button
									type='button'
									className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
									onClick={() => setCollapseShow('hidden')}
								>
									<BiMenu />
								</button>
							</div>
						</div>

						{/* Form */}
						<form className='mt-6 mb-4 md:hidden'>
							<div className='relative flex w-full flex-wrap items-stretch'>
								<span className='z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3'>
									<FiSearch className='text-blueGray-300 text-xl' />
								</span>
								<input
									type='text'
									placeholder='Search...'
									className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'
								/>
							</div>
						</form>

						{/* Divider */}
						<hr className='mt-8 md:min-w-full' />

						{/* Heading */}
						<nav className='flex-grow ml-0 xl:ml-0 sm:mt-4'>
							<ul className='space-y-4'>
								<li className='flex items-center w-fit pt-6 pl-4  gap-2 text-[#808080] hover:text-[#ce452a]'>
									<Link to='' className='flex items-center   font-semibold gap-2'>
										<GoHome size={20} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3 hover:text-OrangeCooL cursor-pointer'>
											Home
										</p>
									</Link>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4  gap-2 text-[#808080] hover:text-[#ce452a]'>
									<Link
										to='adventures'
										className='flex items-center   font-semibold gap-2'
									>
										<GrSafariOption size={20} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3 hover:text-OrangeCooL cursor-pointer'>
											Adventures
										</p>
									</Link>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4 gap-2 text-[#808080] hover:text-[#ce452a] '>
									<Link to='packages' className='flex items-center   font-semibold gap-2'>
										<CgInfinity size={22} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3 hover:text-OrangeCooL cursor-pointer'>
											Packages
										</p>
									</Link>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4 gap-2 text-[#808080] hover:text-[#ce452a] '>
									<Link
										to='transport'
										className='flex items-center   font-semibold gap-2'
									>
										<RiCarFill size={22} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3 hover:text-OrangeCooL cursor-pointer'>
											Transport
										</p>
									</Link>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4 gap-2 text-[#808080] hover:text-[#ce452a] '>
									<Link
										to='accomodation'
										className='flex items-center   font-semibold gap-2'
									>
										<FaBed size={22} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3 hover:text-OrangeCooL cursor-pointer'>
											Hotels
										</p>
									</Link>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4 gap-2 text-[#808080] hover:text-[#ce452a] '>
									<Link to='tickets' className='flex items-center   font-semibold gap-2'>
										<BsTicketPerforated size={22} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3 hover:text-OrangeCooL cursor-pointer'>
											Tickets
										</p>
									</Link>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4 gap-2 text-[#808080] hover:text-[#ce452a] '>
									<a href='maps' className='flex items-center font-semibold gap-2'>
										<FaMapMarkerAlt size={26} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3'>Maps</p>
									</a>
								</li>
							</ul>
						</nav>

						{/* <ul className="md:flex-col md:min-w-full flex flex-col list-none">

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Settings
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/tables"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Tables
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/maps"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Maps
                </Link>
              </li>
            </ul> */}

						{/* Divider */}
						<hr className='my-4 md:min-w-full' />
					</div>
				</div>
			</nav>
		</>
	)
}
