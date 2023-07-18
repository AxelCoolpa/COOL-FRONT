import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectError, selectLoading } from '../../features/destinationSlice'

import { useCurrentUser } from '../../hooks/useCurrentUser'

import { selectActivities } from '../../features/activitiesSlice'
import { selectAccomodation } from '../../features/accomodationSlice'

import GridColumns from '../../components/sections/GridColumns'
import MainCard from '../../components/listings/Card'
import Button from '../../components/buttons/Button'

const ShowActivities = () => {
	const navigate = useNavigate()

	const { currentUser, currentUserId } = useCurrentUser()

	const allActivities = useSelector(selectActivities)
	const allRooms = useSelector(selectAccomodation)

	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)

	if (loading) {
		return <div>Cargando actividades...</div>
	}
	if (error) {
		return <div>Error al cargar actividades: {error} </div>
	}

	const currentActivities = allActivities.filter((a) => a.providerId === currentUserId)
	const currentRooms = allRooms.filter((r) => r.providerId === currentUserId)

	const enabled =
		currentUser?.profileProvider?.relatedChannel === 'Travel'
			? currentActivities.filter((activity) => activity.itDeleted === false)
			: currentRooms.filter((room) => room.itDeleted === false)

	const disabled =
		currentUser?.profileProvider?.relatedChannel === 'Travel'
			? currentActivities.filter((activity) => activity.itDeleted === true)
			: currentRooms.filter((room) => room.itDeleted === true)

	return (
		<>
			<div className=''>
				<div className='flex flex-col rounded-t bg-white mb-0 px-6 py-6'>
					<div className='relative text-center flex justify-between pt-5 mt-3 mb-3 pb-3'>
						<h6 className='text-gray-600 text-md uppercase font-bold'>
							{currentUser?.profileProvider?.relatedChannel === 'Travel'
								? 'Active activities'
								: currentUser?.profileProvider?.relatedChannel === 'Accomodation'
								? 'Active rooms'
								: 'Active services'}
						</h6>
						{currentUser?.profileProvider?.relatedChannel === 'Travel' ? (
							<div className='absolute right-0 -top-1 xl:-top-2'>
								<Button
									label='Add Activity'
									onClick={() => navigate('/provider/create/activity')}
									small
								/>
							</div>
						) : currentUser?.profileProvider?.relatedChannel === 'Accomodation' ? (
							<div className='absolute right-0 -top-1 xl:-top-2'>
								<Button
									label='Add Accomodation'
									onClick={() => navigate('/provider/create/accomodation')}
									small
								/>
							</div>
						) : (
							<div className='absolute right-0 -top-1 xl:-top-2'>
								<Button
									label='Add Logistics'
									onClick={() => navigate('/provider/create/logistic')}
									small
								/>
							</div>
						)}
					</div>

					<div className='flex-auto px-3 lg:px-0 py-10 pt-0'>
						<GridColumns>
							{enabled.map((item) => (
								<MainCard key={item._id} data={item} />
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
								: 'Inactive services'}
						</h6>
					</div>

					<div className='flex-auto px-3 lg:px-0 py-10 pt-0'>
						<GridColumns>
							{disabled.map((item) => (
								<MainCard key={item._id} data={item} />
							))}
						</GridColumns>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShowActivities
