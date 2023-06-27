import Ticket from '../../components/listings/Ticket'

import { listingTickets } from '../../mocks/listingTickets'

const Tickets = () => {
	return (
		<div>
			<h1 className='text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold pt-5 pb-20  text-center tracking-tighter'>
				Tickets
			</h1>
			<div className='py-10 flex flex-wrap items-center justify-center gap-14'>
				{listingTickets.map((ticket) => (
					<Ticket key={ticket._id} data={ticket} />
				))}
			</div>
		</div>
	)
}

export default Tickets
