/*eslint-disable*/
import React from 'react'

import { Link } from 'react-router-dom'
import styles from '../../styles/Global'

import { BiMenu } from 'react-icons/bi'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { GrSafariOption } from 'react-icons/gr'
import { IoMdSettings } from 'react-icons/io'
import { MdLocationCity } from 'react-icons/md'

import UserDropdown from '../dropdown/UserDropdown'
import Dropdown from '../dropdown/Dropdown'

export default function SidebarProveedor() {
	const [collapseShow, setCollapseShow] = React.useState('hidden')
	return (
		<>
			<nav className={`${styles.nav}`}>
				<div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap justify-between w-full mx-auto'>
					{/* Toggler */}
					<button
						className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
						type='button'
						onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
					>
						<BiMenu />
					</button>
					{/* Brand */}
					{/* <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/proveedor-admin/show-discover"
          >
            <div className='flex items-center justify-center'>
              <img src={Cool} alt='Cool-LOGO' className='w-20 mt-12' />
            </div>
          </Link> */}

					{/* User */}

					<ul className='md:hidden items-center flex flex-wrap list-none'>
						<li className='inline-block relative'>
							<Dropdown />
						</li>
						<li className='inline-block relative'>
							<UserDropdown />
						</li>
					</ul>

					{/* Collapse */}
					<div
						className={
							'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
							collapseShow
						}
					>
						{/* Collapse header */}
						<div className='md:min-w-md md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
							<div className='flex flex-wrap'>
								<div className='w-6/12'>
									<Link
										className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
										to='/proveedor-admin/show-discover'
									></Link>
								</div>
							</div>
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
									<a
										href='/proveedor-admin'
										className='flex items-center font-semibold gap-2'
									>
										<BsFillGrid1X2Fill size={18} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3 hover:text-OrangeCooL cursor-pointer'>
											Adventures
										</p>
									</a>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4  gap-2 text-[#808080] hover:text-[#ce452a]'>
									<a
										href='/proveedor-admin/create'
										className='flex items-center font-semibold gap-2'
									>
										<FaUser size={20} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3'>Create</p>
									</a>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4 gap-2 text-[#808080] hover:text-[#ce452a] '>
									<a
										href='/proveedor-admin'
										className='flex items-center font-semibold gap-2'
									>
										<GrSafariOption size={22} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3'>#</p>
									</a>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4  gap-2 text-[#808080] hover:text-[#ce452a] '>
									<a
										href='/proveedor-admin'
										className='flex items-center font-semibold gap-2'
									>
										<MdLocationCity size={24} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3'>#</p>
									</a>
								</li>
								<li className='flex items-center w-fit pt-6 pl-4 gap-2 text-[#808080] hover:text-[#ce452a] '>
									<a
										href='/proveedor-admin'
										className='flex items-center font-semibold gap-2'
									>
										<IoMdSettings size={26} className='font-bold text-OrangeCooL' />
										<p className='flex-grow ml-3 xl:ml-3'>#</p>
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
