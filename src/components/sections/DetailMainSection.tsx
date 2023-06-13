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
			<div className='flex flex-col py-5 gap-10'>
				<h3 className='text-3xl font-bold'>Maps</h3>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17090799.40050517!2d-82.28714719430437!3d8.55800738490379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa61583c8be2be3%3A0x79eee04d1fa59bcf!2zUGFuYW3DoQ!5e0!3m2!1ses!2sco!4v1686660412555!5m2!1ses!2sco'
					width='1000'
					height='600'
					style={{ border: 0, borderRadius: 20 }}
					// allowfullscreen=''
					loading='lazy'
					// referrerpolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</div>
	)
}

export default DetailMainSection
