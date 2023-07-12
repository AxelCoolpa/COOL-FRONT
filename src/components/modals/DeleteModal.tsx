import Modal from './Modal'
import useDeleteModal from '../../hooks/useDeleteModal'
import { deleteUser } from '../../features/deleteUserSlice'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../features/LoginSlice'

const DeleteModal = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { currentUserId } = useCurrentUser()

	const deleteModal = useDeleteModal()

	const onDelete = async () => {
		await dispatch(deleteUser(currentUserId))

		await dispatch(logout())
		setTimeout(() => {
			deleteModal.onClose
			navigate('/register')
		}, 100)
	}

	const bodyContent = (
		<div className='flex flex-col justify-center items-center'>
			<p className='xl:text-lg 2xl:text-xl'>
				Are you sure you want to delete your account? This action is irreversible.
			</p>
		</div>
	)

	return (
		<Modal
			isOpen={deleteModal.isOpen}
			onClose={deleteModal.onClose}
			title='Delete Account'
			body={bodyContent}
			actionLabel='Delete'
			onSubmit={onDelete}
			secondaryActionLabel='Cancel'
			secondaryAction={deleteModal.onClose}
		/>
	)
}

export default DeleteModal
