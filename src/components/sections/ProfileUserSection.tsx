import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useCurrentUser } from '../../hooks/useCurrentUser'

import { logout } from '../../features/LoginSlice'

// import { BsDot } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
import { GrLanguage } from 'react-icons/gr'
import { RxSwitch } from 'react-icons/rx'
import { TbLogout, TbMessage, TbUserCircle } from 'react-icons/tb'

import Avatar from '../Avatar'
import ProfileButton from '../buttons/ProfileButton'

const ProfileUserSection = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { currentUser, currentUserId } = useCurrentUser()

	const [darkMode, setDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
	}

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<div className='flex flex-col gap-10 mt-0 md:mt-10'>
			<h1 className='text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold py-5 text-center tracking-tighter'>
				Your profile
			</h1>
			<div className='flex flex-col gap-10 mx-5 xl:mx-10 2xl:mx-20'>
				<div className='flex gap-7 ml-3'>
					<Avatar avatar={currentUser?.avatar} />
					<div className='flex flex-col justify-center'>
						<h3 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold'>
							Hello, {currentUser?.firstName} {currentUser?.lastname}
						</h3>
						<span className='text-sm lg:text-base xl:text-lg 2xl:text-xl text-neutral-400'>
							{currentUser?.location}
						</span>
					</div>
				</div>
				<div className='flex flex-col gap-[30px] text-sm lg:text-base xl:text-lg'>
					<ProfileButton
						label='Personal Information'
						icon={TbUserCircle}
						onClick={() => navigate(`/profile/${currentUserId}`)}
					/>

					<div
						className='relative w-full cursor-pointer'
						onClick={() => navigate(`/notifications/${currentUserId}`)}
					>
						{/* CONDITIONAL ACTIVE NOTIFICATIONS */}
						{/* {notifications && (
							<div>
								<BsDot
									size={55}
									className='absolute text-OrangeCooL -top-[2px] right-0 z-10'
								/>
							</div>
						)} */}
						<ProfileButton label='Notification' icon={FiBell} />
					</div>
					<ProfileButton label='FAQ' icon={TbMessage} />
					<ProfileButton
						label='Dark Mode'
						icon={RxSwitch}
						onClick={toggleDarkMode}
						buttonClassName={darkMode ? 'bg-black text-white border-white' : ''}
					/>
					<ProfileButton label='Language' icon={GrLanguage} />
					<ProfileButton
						label='Logout'
						icon={TbLogout}
						labelClassName='text-red-500'
						onClick={handleLogout}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProfileUserSection
