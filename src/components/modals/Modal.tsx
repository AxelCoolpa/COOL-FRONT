import { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	body?: React.ReactElement
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, body }) => {
	const [showModal, setShowModal] = useState(isOpen)

	useEffect(() => {
		setShowModal(isOpen)
	}, [isOpen])

	const handleClose = useCallback(() => {
		setShowModal(false)
		setTimeout(() => {
			onClose()
		}, 300)
	}, [onClose])

	if (!isOpen) {
		return null
	}

	return (
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
				<div className='relative w-9/12 m-auto'>
					{/* CONTENT */}
					<div
						className={`
            translate
            duration-300 
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
            `}
					>
						<div className='translate border-0 rounded-[20px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
							{/* HEADER */}
							<div className='flex items-center justify-center p-6 rounded-t relative border-b-[1px]'>
								<button
									onClick={handleClose}
									className='p-1 border-0 hover:opacity-70 transition absolute right-9'
								>
									<IoMdClose size={30} />
								</button>
								<div className='text-3xl font-bold'>{title}</div>
							</div>
							{/* BODY */}
							<div className='relative p-6 flex-auto'>{body}</div>
						</div>
						<div
							onClick={handleClose}
							className='absolute top-0 left-0 -ml-40 w-screen h-full -z-10'
						></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
