import React from 'react'
import HeaderSection from './HeaderSection'
import { listings } from '../../mocks/listingsCards'

const DiscoverMainSection = () => {
	const discover = listings[Math.floor(Math.random() * listings.length)]

	return (
		<div>
			<HeaderSection name={discover.title} rate={discover.rating} favorite price={70} />
		</div>
	)
}

export default DiscoverMainSection
