import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { activityById, selectActivityById } from '../../features/activityByIdSlice'
import {
	accomodationById,
	selectAccomodationById,
} from '../../features/accomodationByIdSlice'
import DetailMainSection from '../../components/sections/DetailMainSection'

const Detail = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const { id } = useParams()

	const activity = useSelector(selectActivityById)
	const room = useSelector(selectAccomodationById)

	const listing = location.pathname.includes('activity') ? activity : room

	useEffect(() => {
		try {
			location.pathname.includes('activity') && dispatch(activityById(id))
			location.pathname.includes('accomodation') && dispatch(accomodationById(id))
		} catch (error: any) {
			throw new Error(error)
		}
	}, [dispatch, id, location])

	return <DetailMainSection listing={listing} />
}

export default Detail
