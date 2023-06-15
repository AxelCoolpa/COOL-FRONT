//   Marto !

import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/buttons/Button'
import GridColumns from '../../components/sections/GridColumns'
import BookingCard from '../../components/details/BookingCard'

const ShowDiscover = () => {
	const navigate = useNavigate()

	return (
		<>
			<Button label='Add adventure' onClick={() => navigate('/proveedor-admin/create')} />
			<GridColumns>
				<BookingCard />
			</GridColumns>
		</>
	)
}

export default ShowDiscover
