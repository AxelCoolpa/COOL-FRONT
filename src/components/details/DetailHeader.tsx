import React from 'react'

import headerImg from '../../assets/headerImg.jpg'

const DetailHeader = () => {
	return (
		<div className='w-full max-h-[400px] bg-black'>
			<div className='flex gap-5'>
				<img src={headerImg} className='object-cover w-full h-[400px] rounded-[20px]' />
				<div className='flex flex-col object-cover gap-5'>
					<img src={headerImg} alt='' className='object-cover h-[190px] rounded-[20px]' />
					<img src={headerImg} alt='' className='object-cover h-[190px] rounded-[20px]' />
				</div>
			</div>
		</div>
	)
}

export default DetailHeader
