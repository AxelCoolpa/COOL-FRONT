import Ticket from '../../components/listings/Ticket'

const Tickets = () => {
	return (
		<div>
			<h1 className='text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold pt-5 pb-20  text-center tracking-tighter'>
				Tickets
			</h1>
			<div className='pt-10 grid grid-cols-1 min-[1360px]:grid-cols-2 md:scale-110'>
				<Ticket />
			</div>
		</div>
	)
}

export default Tickets
