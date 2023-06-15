import React from 'react'

import { listings } from '../../mocks/listingsCards'
import { categories } from '../categories/categories'

import HeaderSection from './HeaderSection'
import CategoryBox from '../categories/CategoryBox'
import ListingCard from '../listings/ListingCard'

const DiscoverMainSection = () => {
	const discover = listings[Math.floor(Math.random() * listings.length)]

	return (
		<div className='flex flex-col w-full'>
			<div className='flex flex-col gap-4 items-center pb-8'>
				<h2 className='text-6xl font-bold'>Discover</h2>
				<h3 className='text-3xl'>Choose your favorite eperience</h3>
			</div>
			<HeaderSection
				name={discover.title}
				rate={discover.rating}
				favorite
				price={discover.individualPrice}
				image={discover.gallery[0]}
			/>
			<div className='px-5 pt-28'>
				<h3 className='text-2xl font-semibold'>Categories</h3>
				<div className='flex flex-row items-center justify-between pt-5'>
					{categories.map((item) => (
						<CategoryBox
							key={item.label}
							label={item.label}
							selected={true}
							icon={item.icon}
						/>
					))}
				</div>
			</div>

			<div className='px-5 pt-10'>
				<h2 className='text-2xl font-semibold'>Trending adventure</h2>
				<div className='pt-10 px-8 grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-11'>
					{listings.map((listing) => {
						return <ListingCard key={listing.id} data={listing} />
					})}
				</div>
			</div>
		</div>
	)
}

export default DiscoverMainSection
