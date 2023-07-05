import { notificacionsList } from '../../mocks/notificationsMock'

import ListingNotificacions from '../../components/listings/ListingNotificacions'
import { IoIosArrowBack } from 'react-icons/io'

const Notifications = () => {
	return (
		<div>
			<div className='relative flex items-center justify-center md:mt-10'>
				<a
					className='absolute left-0 mt-5 hidden md:flex items-center gap-1 font-bold uppercase text-xs lg:text-base px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
					href='/profile'
				>
					<IoIosArrowBack size={18} />
					Back
				</a>
				<h2 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold pt-5 text-center -tracking-[0.6px]'>
					Notifications
				</h2>
			</div>
			<div className='mx-16 mt-10 xl:mt-16 2xl:mt-24'>
				<h3 className='text-xl lg:text-2xl 2xl:text-3xl font-bold'>Today</h3>
				<div className='flex flex-col gap-14 mt-14 mx-auto'>
					{notificacionsList.map((notification) => (
						<ListingNotificacions
							icon={notification.icon}
							title={notification.title}
							description={notification.description}
							active={notification.active}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Notifications
