import React from 'react'

interface BookingCardProps {
	price?: string
}

const BookingCard: React.FC<BookingCardProps> = ({ price }) => {
	return (
		<div className=' w-full h-[350px]'>
			<div className='bg-white mx-10 rounded-xl h-full shadow-CooL'></div>
		</div>
	)
}

export default BookingCard
