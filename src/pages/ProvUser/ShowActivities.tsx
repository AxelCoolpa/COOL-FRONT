import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectError, selectLoading } from '../../features/destinationSlice'

import GridColumns from '../../components/sections/GridColumns'
import ListingCard from '../../components/listings/ListingCard'
import { selectActivities } from '../../features/activitiesSlice'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import ActivityCard from '../../components/listings/ActivityCard'

const ShowActivities: React.FC = () => {
	const activities = useSelector(selectActivities)

	const { currentUser } = useCurrentUser()

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
							{currentUser?.profileProvider?.relatedChannel === 'Travel'
								? 'Active activities'
								: currentUser?.profileProvider?.relatedChannel === 'Accomodation'
								? 'Active rooms'
								: currentUser?.profileProvider?.relatedChannel === 'Logistics'
								? 'Active services'
								: null}
						</h6>
						{currentUser?.profileProvider?.relatedChannel === 'Travel' ? (
							<button
								className='bg-red-500 text-white active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md mr-1 ease-linear transition-all duration-150'
								onClick={() => navigate('/provider/create/activity')}
							>
								Add Activity
							</button>
						) : currentUser?.profileProvider?.relatedChannel === 'Accomodation' ? (
							<button
								className='bg-red-500 text-white active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md mr-1 ease-linear transition-all duration-150'
								onClick={() => navigate('/provider/create/accomodation')}
							>
								Add Accomodation
							</button>
						) : currentUser?.profileProvider?.relatedChannel === 'Logistics' ? (
							<button
								className='bg-red-500 text-white active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md mr-1 ease-linear transition-all duration-150'
								onClick={() => navigate('/provider/create/logistic')}
							>
								Add Logistics
							</button>
						) : null}
					</div>

					<div className='flex-auto px-3 lg:px-0 py-10 pt-0'>
						<GridColumns>
							{enabledActitivities.map((activity) => (
								<ActivityCard key={activity._id} data={activity} />
							))}
						</GridColumns>
					</div>
				</div>

				<div className='rounded-t bg-white mb-0 px-6 py-6'>
					<div className='text-center flex justify-between pt-3 mt-3 mb-3 pb-3'>
						<h6 className='text-gray-600 text-md uppercase font-bold'>
							{currentUser?.profileProvider?.relatedChannel === 'Travel'
								? 'Inactive activities'
								: currentUser?.profileProvider?.relatedChannel === 'Accomodation'
								? 'Inactive rooms'
								: currentUser?.profileProvider?.relatedChannel === 'Logistics'
								? 'Inactive services'
								: null}
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
