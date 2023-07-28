import { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from '../buttons/Button'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	onSubmit?: () => void
	title?: string
	body?: React.ReactElement
	footer?: React.ReactElement
	actionLabel?: string
	disabled?: boolean
	secondaryAction?: () => void
	secondaryActionLabel?: string
}
const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState(isOpen)

	useEffect(() => {
		setShowModal(isOpen)
	}, [isOpen])

	const handleClose = useCallback(() => {
		if (disabled) {
			return
		}

		setShowModal(false)
		setTimeout(() => {
			onClose()
		}, 300)
	}, [onClose])

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return
		}

		if (onSubmit) {
			onSubmit()
		}
	}, [disabled, onSubmit])

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return
		}

		secondaryAction()
	}, [disabled, secondaryAction])

	if (!isOpen) {
		return null
	}

	return (
		<>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
				<div
					onClick={handleClose}
					className='absolute top-0 left-0 w-screen h-full -z-10 cursor-pointer'
				></div>
				<div className='relative w-full p-2 md:p-5 lg:w-11/12 lg:px-0 xl:w-10/12 m-auto'>
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
							{/* FOOTER */}
							<div className='flex flex-col gap-2 p-6'>
								<div className='flex flex-row items-center gap-4 w-full'>
									{secondaryAction && secondaryActionLabel && (
										<Button
											outline
											disabled={disabled}
											label={secondaryActionLabel}
											onClick={handleSecondaryAction}
										/>
									)}
									{onSubmit && actionLabel && (
										<Button
											disabled={disabled}
											label={actionLabel}
											onClick={handleSubmit}
										/>
									)}
								</div>
								{footer}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
