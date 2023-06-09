import React from 'react'
import { useParams } from 'react-router-dom'

import DetailHeader from '../details/DetailHeader'
import { listings } from '../../mocks/listingsCards'

const DetailMainSection = () => {
	const { id } = useParams()

	const listing = listings.find((item) => item.id === id)

	return <DetailHeader listing={listing} />
}

export default DetailMainSection
