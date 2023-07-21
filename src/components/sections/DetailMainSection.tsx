import React, { useEffect, useState } from 'react'
import { EnumActivity, EnumRoom } from '../../types'

import DetailHeader from '../details/DetailHeader'
import DetailInfo from '../details/DetailInfo'
import BookingCard from '../details/BookingCard'
import ListenAgent from '../details/ListenAgent'
import Gallery from '../details/Gallery'
import Map from '../Map'
import axios from 'axios'
import { getLocationMap } from '../../api/apiMapGoogle'
interface DetailProps {
	listing: EnumActivity | EnumRoom
}

const DetailMainSection: React.FC<DetailProps> = ({ listing }) => {
	const [urlLocation, setUrlLocation] = useState<string | undefined>()
	getLocationMap(listing).then((urlLocation) => setUrlLocation(urlLocation))
	console.log(listing)
	useEffect(() => {

		console.log(urlLocation)
	}, [urlLocation])
	return (
		<div className='max-w-screen-2xl mx-auto md:mt-12 w-full'>
			<DetailHeader listing={listing?.images || listing?.galleryImage} />
			<div className='grid grid-cols-1 xl:grid-cols-7 md:gap-10 py-16'>
				<DetailInfo
					name={listing?.title || listing?.name}
					rating={listing?.rating ? listing?.rating : null}
					description={listing?.description}
				/>
				<div className='order-first xl:order-last lg:col-span-3'>
					<BookingCard data={listing} />
				</div>
			</div>
			<div className='grid grid-cols-1 xl:grid-cols-9 md:gap-10 py-0 xl:py-10'>
				<div className='xl:col-span-6 2xl:col-span-5'>
					<ListenAgent data={listing?.providerId} />
				</div>
			</div>
			<hr className='w-full xl:w-4/6 2xl:w-3/6  mx-2 m-10' />
			{listing?.galleryImage
				? listing?.galleryImage.length > 2 && (
					<div className='grid grid-cols-1 xl:grid-cols-9 md:gap-10 py-0 xl:py-10'>
						<div className='xl:col-span-7'>
							<Gallery listing={listing?.galleryImage} />
						</div>
					</div>
				)
				: listing?.images
					? listing?.images.length > 2 && (
						<div className='grid grid-cols-1 xl:grid-cols-9 md:gap-10 py-0 xl:py-10'>
							<div className='xl:col-span-7'>
								<Gallery listing={listing?.images} />
							</div>
						</div>
					)
					: null}

			{listing?.galleryImage
				? listing?.galleryImage.length > 2 && (
					<hr className='w-full xl:w-4/6 2xl:w-3/6 mx-2 m-10' />
				)
				: listing?.images
					? listing?.images.length > 2 && (
						<hr className='w-full xl:w-4/6 2xl:w-3/6 mx-2 m-10' />
					)
					: null}

			<div className='flex flex-col py-10 gap-10'>
				<h3 className='text-3xl font-bold'>Maps</h3>
				<Map mapURL={urlLocation} />
			</div>
		</div>
	)
}

export default DetailMainSection
