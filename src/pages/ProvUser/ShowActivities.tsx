//   Marto !
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
	selectDestinations,
	selectError,
	selectLoading,
} from '../../features/destinationSlice'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

import GridColumns from '../../components/sections/GridColumns'
import ListingCard from '../../components/listings/ListingCard'
import { selectActivities } from '../../features/activitiesSlice'

const ShowActivities: React.FC = () => {
	const activities = useSelector(selectActivities)
	console.log(activities)

	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)
	const navigate = useNavigate()

	if (loading) {
		return <div>Cargando actividades...</div>
	}
	if (error) {
		return <div>Error al cargar actividades: {error} </div>
	}

	const enabledActitivities = activities.filter(
		(activity) => activity.itDeleted === false
	)

	const disabledActitivities = activities.filter(
		(activity) => activity.itDeleted === true
	)

	return (
		<>
			<div className=''>
				<div className='flex flex-col rounded-t bg-white mb-0 px-6 py-6'>
					<div className='text-center flex justify-between pt-3 mt-3 mb-3 pb-3'>
						<h6 className='text-gray-600 text-md uppercase font-bold'>
							Active activities
						</h6>
						<button
							className='bg-red-500 text-white active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md mr-1 ease-linear transition-all duration-150'
							onClick={() => navigate('/provider/create')}
						>
							Add Activity
						</button>
					</div>

					<div className='flex-auto px-3 lg:px-0 py-10 pt-0'>
						<GridColumns>
							{enabledActitivities.map((activity) => (
								<ListingCard key={activity._id} data={activity} />
							))}
						</GridColumns>
					</div>
				</div>

				<div className='rounded-t bg-white mb-0 px-6 py-6'>
					<div className='text-center flex justify-between pt-3 mt-3 mb-3 pb-3'>
						<h6 className='text-gray-600 text-md uppercase font-bold'>
							Inactive activities
						</h6>
					</div>

					<div className='flex-auto px-3 lg:px-0 py-10 pt-0'>
						<GridColumns>
							{disabledActitivities.map((activity) => (
								<ListingCard key={activity._id} data={activity} />
							))}
						</GridColumns>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShowActivities
