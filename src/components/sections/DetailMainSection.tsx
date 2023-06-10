import React from 'react'
import { useParams } from 'react-router-dom'

import { listings } from '../../mocks/listingsCards'

import DetailHeader from '../details/DetailHeader'
import DetailInfo from '../details/DetailInfo'
import BookingCard from '../details/BookingCard'

const DetailMainSection = () => {
	const { id } = useParams()

	const listing = listings.find((item) => item.id === id)

	return (
		<div className='max-w-screen-2xl mx-auto'>
			<DetailHeader listing={listing} />
			<div className='grid grid-cols-1 lg:grid-cols-7 md:gap-10 pt-16'>
				<DetailInfo
					name={listing?.name}
					rating={listing?.rating}
					description={listing?.description}
				/>
				<div className='order-first mb-10 lg:order-last lg:col-span-3'>
					<BookingCard price={listing?.price} />
				</div>
			</div>
		</div>
	)
}

export default DetailMainSection
