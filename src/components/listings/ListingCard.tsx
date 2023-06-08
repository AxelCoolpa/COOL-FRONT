import React from 'react'

interface EnumData {
	id: string
	name: string
	description: string
	imageSrc: string
	categories: Array<string>
	locationValue: string
	usserId: string
	activityes: Array<string>
	starterPack: string
	startTime: string
	endTime: string
}

interface ListingCardProps {
	data: EnumData
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
	return (
		<div
			onClick={() => alert(`/listings/${data.id}`)}
			className='col-span-1 cursor-pointer group'
		>
			ListingCard
		</div>
	)
}

export default ListingCard
