import mastercard from '../../assets/mastercard.svg'
import mobileTicket from '../../assets/mobileTicket.svg'
import ticket from '../../assets/ticket.svg'
import QR from '../../assets/QR.svg'

import { BsDot } from 'react-icons/bs'

const Ticket = () => {
	return (
		<div>
			<div className=' flex items-center justify-center'>
				<div className='relative flex items-center justify-center'>
					{/* BASE TICKET */}
					<img src={mobileTicket} alt='mobileTicket' className='md:hidden' />
					<img src={ticket} alt='ticket' className='hidden md:flex' />

					{/* MASTERCARD LOGO */}
					<img src={mastercard} alt='mastercard' className='absolute top-7 right-7' />

					{/* CONTENT */}
					<div className='absolute flex flex-col items-center justify-center top-16 md:top-6 md:left-3 gap-10'>
						{/* DESTINATION AND ACTIVITY */}
						<div className='flex flex-col items-center justify-center gap-1'>
							<h3 className='text-[25px] font-semibold tracking-[0.25px] '>
								Canal of panama
							</h3>
							<p className='text-[22px]'>Visit basic</p>
						</div>

						{/* DATE/TIME AND PEOPLES */}
						<div className='bg-[#E8ECF4] w-full mx-10 px-8 py-2 -my-2 flex justify-between items-center rounded-[10px]'>
							<div className='flex flex-col items-center justify-center'>
								<h5 className='font-bold'>20 jun</h5>
								<span className='text-[10px] text-black/50'>19:00 hs</span>
							</div>
							<label className='text-[10px]'>2 Adults</label>
						</div>
					</div>

					{/* ORDER INFO */}
					<div className='absolute flex flex-col items-center justify-center top-[300px] left-12 md:top-6 md:left-3 gap-2'>
						<span className='md:text-[9px] text-GreenCooL md:rotate-90'>
							Order No. 399202849211238
						</span>
						<img src={QR} alt='QR' className='relative md:left-8' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ticket
