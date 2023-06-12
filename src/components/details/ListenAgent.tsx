import React from 'react'

import { agent1 } from '../../mocks/listingsAgents'

import Avatar from '../Avatar'

const ListenAgent = () => {
	return (
		<div className='flex flex-col gap-10 mb-20'>
			<h3 className='text-3xl font-medium'>Listen agent</h3>
			<div className='flex shadow-CooL rounded-xl'>
				<Avatar avatar={agent1?.avatar} wh={60} />
			</div>
		</div>
	)
}

export default ListenAgent
