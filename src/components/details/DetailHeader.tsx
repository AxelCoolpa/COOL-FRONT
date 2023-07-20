/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'

interface DetailHeaderProps {
	listing: string | string[]
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ listing }) => {
	console.log(listing)

	return (
		<div className='w-full max-h-[300px] lg:max-h-[400px]'>
			<div className='flex gap-5 lg:justify-center'>
				{listing === undefined ? (
					<img
						src={listing}
						alt='Image1'
						className='object-cover w-full h-[300px] lg:h-[400px] rounded-[20px]'
					/>
				) : (
					<img
						src={listing[0]}
						alt='Image1'
						className={`${
							listing?.length <= 2 ? 'w-full' : 'w-3/5 xl:w-4/5'
						} object-cover h-[300px] lg:h-[400px] rounded-[20px]`}
					/>
				)}

				{listing?.length > 2 && (
					<div className='flex flex-col object-cover gap-5'>
						<img
							src={listing[1]}
							alt='Image2'
							className='object-cover h-[140px] lg:h-[190px] rounded-[20px]'
						/>
						<img
							src={listing[2]}
							alt='Image3'
							className='object-cover h-[140px] lg:h-[190px] rounded-[20px]'
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default DetailHeader
