import UpdateActivity from '../../components/sections/UpdateActivity'
import UpdateRoom from '../../components/sections/UpdateRoom'
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
				Update Room
				<UpdateRoom />
			</div>
		) : null

	return <>{updateForm}</>
}

export default Update
