import { useGetUsersQuery } from '../api/getUsers'

export const useCurrentUser = () => {
	const localUser = JSON.parse(localStorage.getItem('user') || '{}')

	const { data } = useGetUsersQuery(null)

	const currentUser = data?.find((user) => user.email === localUser.email)

	const currentUserId = currentUser?._id

	return { currentUser, currentUserId }
}
