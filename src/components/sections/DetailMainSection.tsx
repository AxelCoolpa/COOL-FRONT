import React from 'react'
import { useParams } from 'react-router-dom'

import { listings } from '../../mocks/listingsCards'

import DetailHeader from '../details/DetailHeader'
import DetailInfo from '../details/DetailInfo'
import BookingCard from '../details/BookingCard'
import ListenAgent from '../details/ListenAgent'
import Gallery from '../details/Gallery'

const DetailMainSection = () => {
	const { id } = useParams()

	const listing = listings.find((item) => item.id === id)

	return (
		<div className='max-w-screen-2xl mx-auto'>
			<DetailHeader listing={listing} />
			<div className='grid grid-cols-1 xl:grid-cols-7 md:gap-10 py-16'>
				<DetailInfo
					name={listing?.name}
					rating={listing?.rating}
					description={listing?.description}
				/>
				<div className='order-first xl:order-last lg:col-span-3'>
					<BookingCard price={listing?.price} />
				</div>
			</div>
			<div className='grid grid-cols-1 xl:grid-cols-9 md:gap-10'>
				<div className='xl:col-span-6 2xl:col-span-5'>
					<ListenAgent />
				</div>
			</div>
			<hr className='w-full xl:w-4/6 2xl:w-3/6  mx-2 m-10' />
			<div className='grid grid-cols-1 xl:grid-cols-9 md:gap-10'>
				<div className='xl:col-span-7'>
					<Gallery listing={listing} />
				</div>
			</div>
			<hr className='w-full xl:w-4/6 2xl:w-3/6 mx-2 m-10' />
		</div>
	)
}

export default DetailMainSection
