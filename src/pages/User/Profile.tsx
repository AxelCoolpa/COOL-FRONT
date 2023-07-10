import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { userById } from '../../features/userByIdSlice'

import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoIosArrowBack } from 'react-icons/io'

import ProfileUserCard from '../../components/cards/ProfileUserCard'
import SettingsUserCard from '../../components/cards/SettingsUserCard'
import ProfileButton from '../../components/buttons/ProfileButton'
import useDeleteModal from '../../hooks/useDeleteModal'
import DeleteModal from '../../components/modals/DeleteModal'

const ProfileUser = () => {
	const dispatch = useDispatch()
	const deleteModal = useDeleteModal()

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
			<div className='text-sm lg:text-base xl:text-lg my-10'>
				<ProfileButton
					label='Delete Account'
					icon={RiDeleteBin5Line}
					onClick={deleteModal.onOpen}
					labelClassName='text-red-500'
				/>
			</div>
			<DeleteModal />
		</>
	)
}

export default ProfileUser
