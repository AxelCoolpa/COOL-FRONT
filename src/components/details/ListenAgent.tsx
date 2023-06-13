import React from 'react'

import { MdPhone } from 'react-icons/md'

import { agent1 } from '../../mocks/listingsAgents'

import Avatar from '../Avatar'

const ListenAgent = () => {
	return (
		<div className='flex flex-col gap-10'>
			<h3 className='text-3xl font-medium'>Listen agent</h3>
			<div className='flex justify-around items-center shadow-CooL rounded-xl p-10'>
				<div className='flex justify-between'>
					<Avatar avatar={agent1?.avatar} alt={agent1.userName} />
				</div>
				<div className='flex flex-col w-2/5 gap-3 pl-5'>
					<h4 className='text-2xl font-semibold'>
						{agent1.name} {agent1.lastName}
					</h4>
					<span className='text-2xl font-medium text-[#989898]'>
						4 hours * We speak English and Spanish
					</span>
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
