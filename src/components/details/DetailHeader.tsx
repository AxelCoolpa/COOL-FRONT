import React from 'react'

interface EnumListing {
	imageSrc: Array<string>
}
interface DetailHeaderProps {
	listing: EnumListing
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ listing }) => {
	console.log(listing)

	return (
		<div className='w-full max-h-[400px]'>
			<div className='flex gap-5'>
				<img
					src={listing.imageSrc[0]}
					className='object-cover w-full h-[400px] rounded-[20px]'
				/>
				<div className='flex flex-col object-cover gap-5'>
					<img
						src={listing?.imageSrc[1]}
						alt=''
						className='object-cover h-[190px] rounded-[20px]'
					/>
					<img
						src={listing?.imageSrc[2]}
						alt=''
						className='object-cover h-[190px] rounded-[20px]'
					/>
				</div>
			</div>
		</div>
	)
}

export default DetailHeader
