import { listings } from '../../mocks/listingsCards'

import HeaderSection from './HeaderSection'
import ListingCard from '../listings/ListingCard'

const HomeMainSection = () => {
	const filterRating = listings?.filter(
		(item) =>
			item.rating
				.reduce((a, b) => a + b / item.rating.length, 0)
				.toString()
				.slice(0, 3) >= '4.5'
	)

	const discover = listings[Math.floor(Math.random() * listings.length)]

	return (
		<div className='flex flex-col w-full gap-12 xl:gap-28 transition'>
			<HeaderSection
				title='Where do you want to go ?'
				subtitle='Explore the best destinations in the world'
				image={discover.gallery[0]}
			/>
			<div className='px-5'>
				<h2 className='text-2xl font-semibold'>Trending adventure</h2>
				<div className='pt-10 px-8 grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-11'>
					{filterRating.map((listing) => {
						return <ListingCard key={listing.id} data={listing} />
					})}
				</div>
			</div>
		</div>
	)
}

export default HomeMainSection
