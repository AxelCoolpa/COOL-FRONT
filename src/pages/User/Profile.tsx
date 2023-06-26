import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { userById } from '../../features/userByIdSlice'

import ProfileUserCard from '../../components/cards/ProfileUserCard'
import SettingsUserCard from '../../components/cards/SettingsUserCard'
import { useParams } from 'react-router-dom'

const ProfileUser = () => {
	const dispatch = useDispatch()

	const { id } = useParams()
	const userID = id

	useEffect(() => {
		dispatch(userById(userID))
	}, [dispatch, userID])

	return (
		<div className='flex flex-wrap'>
			<div className='w-full lg:w-8/12 px-4'>
				<SettingsUserCard />
			</div>
			<div className='w-full lg:w-4/12 px-4'>
				<ProfileUserCard />
			</div>
		</div>
	)
}

export default ProfileUser
