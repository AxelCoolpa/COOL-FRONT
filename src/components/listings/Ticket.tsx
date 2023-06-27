import mobileTicket from '../../assets/mobileTicket.svg'
import ticket from '../../assets/ticket.svg'
import QR from '../../assets/QR.svg'

const Ticket = () => {
	return (
		<div>
			<div className=' flex items-center justify-center'>
				<div className='relative'>
					<img src={mobileTicket} alt='ticket' className='md:hidden' />
					<img src={ticket} alt='ticket' className='hidden md:flex' />
					<div className='absolute flex items-center justify-center md:top-6 md:left-3 '>
						<img src={QR} alt='QR' className='relative md:left-8' />
						<span className='text-[9px] text-GreenCooL md:rotate-90'>
							Order No. 399202849211238
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ticket
