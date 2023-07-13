import UpdateActivity from '../../components/sections/UpdateActivity'
import UpdateAccomodation from '../../components/sections/UpdateAccomodation'
import { useCurrentUser } from '../../hooks/useCurrentUser'

const Update = () => {
	const { currentUser } = useCurrentUser()

	const updateForm =
		currentUser?.profileProvider?.relatedChannel === 'Travel' ? (
			<div>
				Update Activity
				<UpdateActivity />
			</div>
		) : currentUser?.profileProvider?.relatedChannel === 'Accomodation' ? (
			<div>
				Update Accomodation
				<UpdateAccomodation />
			</div>
		) : null

	return <>{updateForm}</>
}

export default Update
