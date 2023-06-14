import React from 'react'

import { user1 } from '../../mocks/listingsProvider'

import { CgCloseO } from 'react-icons/cg'
import { FiMail } from 'react-icons/fi'
import { HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

import Avatar from '../Avatar'
import Button from '../buttons/Button'

const ProviderCard = () => {
	return (
		<div className='flex flex-col gap-10 p-5'>
			<div className='flex gap-6'>
				<Avatar avatar={user1.avatar} wh={28} borderR={'3xl'} />
				<div className='flex flex-col items-center justify-center gap-2'>
					<span className='text-OrangeCooL'>#{user1.id}</span>
					<p className='text-lg font-semibold'>
						{user1.name} {user1.lastName}
					</p>
				</div>
			</div>
			<div className='flex gap-5'>
				<div className=''>
					<Button
						label='Edit profile'
						onClick={() => alert('Edit profile')}
						outline
						card
						w={44}
					/>
				</div>
				<div className='w-20 h-14'>
					<button
						onClick={() => alert('Close')}
						className='bg-OrangeCooL text-white w-20 h-14 p-4 mt-5 text-center flex items-center justify-center rounded-3xl'
					>
						<CgCloseO size={30} />
					</button>
				</div>
			</div>
			<div className='flex flex-col gap-6'>
				<div className='flex gap-4 items-center'>
					<div className='w-12 h-12 text-OrangeCooL border border-OrangeCooL rounded-full flex items-center justify-center'>
						<HiOutlinePhone size={25} />
					</div>
					<span>{user1.phone}</span>
				</div>
				<div className='flex gap-4 items-center'>
					<div className='w-12 h-12 text-OrangeCooL border border-OrangeCooL rounded-full flex items-center justify-center'>
						<FiMail size={25} />
					</div>
					<span>{user1.mail}</span>
				</div>
				<div className='flex gap-4 items-center'>
					<div className='w-12 h-12 text-OrangeCooL border border-OrangeCooL rounded-full flex items-center justify-center'>
						<HiOutlineLocationMarker size={25} />
					</div>
					<span className='w-2/5'>{user1.address}</span>
				</div>
			</div>
		</div>
	)
}

export default ProviderCard
