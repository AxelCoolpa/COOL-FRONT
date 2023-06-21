import React, { createRef, useState } from 'react'
import { Placement, createPopper } from '@popperjs/core'

import imagenUno from '../../assets/Avatar.jpg'
import Avatar from '../Avatar'

const UserDropdown: React.FC = () => {
	const [popoverShow, setPopoverShow] = useState<boolean>(false)
	const btnDropdownRef = createRef<HTMLAnchorElement>()
	const popoverDropdownRef = createRef<HTMLDivElement>()
	const openDropdownPopover = () => {
		setPopoverShow(!popoverShow)
		createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
			placement: 'bottom-start' as Placement,
		})
		setPopoverShow(true)
	}
	const closeDropdownPopover = () => {
		setPopoverShow(false)
	}
	return (
		<>
			<a
				className='text-blueGray-500 block'
				href='#'
				ref={btnDropdownRef}
				onClick={(e) => {
					e.preventDefault()
					popoverShow ? closeDropdownPopover() : openDropdownPopover()
				}}
			>
				<div className='items-center flex'>
					<span className='w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full'>
						<Avatar avatar={imagenUno} wh={12} />
					</span>
				</div>
			</a>
			<div
				ref={popoverDropdownRef}
				className={
					(popoverShow ? 'block ' : 'hidden ') +
					'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
				}
			>
				<a
					href='#'
					className={
						'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
					}
					onClick={(e) => e.preventDefault()}
				>
					Action
				</a>
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
				<div className='h-0 my-2 border border-solid border-blueGray-100' />
				<a
					href='#'
					className={
						'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
					}
					onClick={(e) => e.preventDefault()}
				>
					Seprated link
				</a>
			</div>
		</>
	)
}

export default UserDropdown
