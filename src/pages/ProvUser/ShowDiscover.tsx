//   Marto !

import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/buttons/Button'

const ShowDiscover = () => {
	const navigate = useNavigate()

	return (
		<div>
			<Button label='Add adventure' onClick={() => navigate('/proveedor-admin/create')} />
		</div>
	)
}

export default ShowDiscover
