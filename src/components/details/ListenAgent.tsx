import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MdPhone } from 'react-icons/md'

import { selectUserById, userById } from '../../features/userByIdSlice'

import Avatar from '../Avatar'

interface Props {
	data: string
}

const ListenAgent: React.FC<Props> = ({ data }) => {
	const dispatch = useDispatch()

	const user = useSelector(selectUserById)

	useEffect(() => {
		dispatch(userById(data))
	}, [data, dispatch])

	return (
		<div className='flex flex-col gap-10'>
			<h3 className='text-3xl font-medium'>Listen agent</h3>
			<div className='flex justify-around items-center shadow-CooL rounded-xl p-10'>
				<div className='flex justify-between'>
					<Avatar avatar={user?.avatar} alt={user?.username} />
				</div>
				<div className='flex flex-col w-2/5 gap-3 pl-5'>
					<h4 className='text-2xl font-semibold'>
						{user?.firstName} {user?.lastname}
					</h4>
					<span className='text-lg font-medium text-[#989898]'>@{user?.username}</span>
					<span className='text-lg font-medium text-[#989898]'>{user?.email}</span>
				</div>
				<div
					onClick={() => alert('llamame')}
					className='flex items-center justify-center bg-sky-100 rounded-full w-16 h-16 ml-28 text-[#5ece2a] drop-shadow-md rotate-12 cursor-pointer hover:scale-110'
				>
					<MdPhone size={30} />
				</div>
			</div>
		</div>
	)
}

export default ListenAgent
