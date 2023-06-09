import { listings } from '../../mocks/listingsCards'
import HeaderSection from './HeaderSection'
import ListingCard from '../listings/ListingCard'

import headerImg from '../../assets/headerImg.jpg'

const HomeMainSection = () => {
	return (
		<div className='flex flex-col w-full gap-36'>
			<HeaderSection
				title='Where do you want to go ?'
				subtitle='Explore the best destinations in the world'
				image={headerImg}
			/>
			<div className='p-5'>
				<h2 className='text-2xl font-semibold'>Trending adventure</h2>
				<div className='pt-10 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11'>
					{listings.map((listing) => {
						return <ListingCard key={listing.id} data={listing} />
					})}
				</div>
			</div>
		</div>
	)
}

export default HomeMainSection
