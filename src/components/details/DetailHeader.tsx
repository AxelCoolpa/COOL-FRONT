import React from 'react'
import { EnumActivity, EnumRoom } from '../../types'

interface DetailHeaderProps {
	listing: EnumActivity | EnumRoom | undefined
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ listing }) => {
	return (
		<div className='w-full max-h-[300px] lg:max-h-[400px]'>
			<div className='flex gap-5 lg:justify-center'>
				{listing?.galleryImage ? (
					<img
						src={listing?.galleryImage || listing?.galleryImage[0]}
						className='object-cover w-3/5 xl:w-4/5 h-[300px] lg:h-[400px] rounded-[20px]'
					/>
				) : (
					<img
						src={listing?.images || listing?.images[0]}
						className='object-cover w-3/5 xl:w-4/5 h-[300px] lg:h-[400px] rounded-[20px]'
					/>
				)}
				{listing?.galleryImage ? (
					<div className='flex flex-col object-cover gap-5'>
						<img
							src={listing?.galleryImage[1]}
							alt=''
							className='object-cover h-[140px] lg:h-[190px] rounded-[20px]'
						/>
						<img
							src={listing?.galleryImage[2]}
							alt=''
							className='object-cover h-[140px] lg:h-[190px] rounded-[20px]'
						/>
					</div>
				) : (
					<div className='flex flex-col object-cover gap-5'>
						<img
							src={listing?.images[1]}
							alt=''
							className='object-cover h-[140px] lg:h-[190px] rounded-[20px]'
						/>
						<img
							src={listing?.images[2]}
							alt=''
							className='object-cover h-[140px] lg:h-[190px] rounded-[20px]'
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default DetailHeader
