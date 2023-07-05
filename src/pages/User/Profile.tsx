import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { userById } from '../../features/userByIdSlice'

import ProfileUserCard from '../../components/cards/ProfileUserCard'
import SettingsUserCard from '../../components/cards/SettingsUserCard'
import { useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const ProfileUser = () => {
	const dispatch = useDispatch()

	const { id } = useParams()
	const userID = id

	useEffect(() => {
		dispatch(userById(userID))
	}, [dispatch, userID])

	return (
		<>
			<a
				className='hidden md:flex items-center gap-1 font-bold uppercase text-xs px-4 py-2 my-5 w-fit rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 md:mt-12 ease-linear transition-all duration-150'
				href='/profile'
			>
				<IoIosArrowBack size={18} />
				Back
			</a>
			<div className='flex flex-wrap-reverse xl:flex-wrap'>
				<div className='w-full xl:w-8/12 px-4'>
					<SettingsUserCard />
				</div>
				<div className='w-full xl:w-4/12 px-4'>
					<ProfileUserCard />
				</div>
			</div>
		</>
	)
}

export default ProfileUser
