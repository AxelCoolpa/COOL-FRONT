import React from 'react'

import { listings } from '../mocks/listingsCards'

import SideBar from '../components/sidebar/SideBar'
import HeaderSection from '../components/sections/HeaderSection'
import ListingCard from '../components/listings/ListingCard'

import headerImg from '../assets/headerImg.jpg'

const Home = () => {
	return (
		<div>
			<SideBar />
			<div className='flex flex-col w-full p-5 md:pl-[220px] xl:pl-[270px] gap-36'>
				<HeaderSection
					title='Where do you want to go ?'
					subtitle='Explore the best destinations in the world'
					image={headerImg}
				/>
				<div className='p-5'>
					<h2 className='text-2xl font-semibold'>Trending adventure</h2>
					<div className='pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
						{listings.map((listing) => {
							return <ListingCard key={listing.id} data={listing} />
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
