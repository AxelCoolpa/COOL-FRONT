import React from 'react'

import mastercard from '../../assets/mastercard.svg'
import mobileTicket from '../../assets/mobileTicket.svg'
import ticket from '../../assets/ticket.svg'
import QR from '../../assets/QR.svg'

interface TicketProps {
	data?: {
		_id: string
		destination: string
		activity: string
		date: string
		time: string
		peoples: string
		secondaryPeoples?: string
	}
}

const Ticket: React.FC<TicketProps> = ({ data }) => {
	return (
		<div>
			<div className='flex items-center justify-center'>
				<div className='relative flex items-center justify-center'>
					{/* BASE TICKET */}
					<img src={mobileTicket} alt='mobileTicket' className='md:hidden' />
					<img src={ticket} alt='ticket' className='hidden md:flex' />

					{/* MASTERCARD LOGO */}
					<img
						src={mastercard}
						alt='mastercard'
						className='absolute top-7 right-7 md:top-5 md:right-6'
					/>

					{/* CONTENT */}
					<div className='absolute flex flex-col items-center justify-center top-[70px]  mx-auto  md:top-8 md:right-14 gap-12 md:gap-6'>
						{/* DESTINATION AND ACTIVITY */}
						<div className='flex flex-col items-center justify-center gap-1'>
							<h3 className='text-[25px] md:text-lg font-bold md:font-semibold  tracking-[0.25px] '>
								{data?.destination}
							</h3>
							<p className='text-[22px] text-sm'>{data?.activity}</p>
						</div>

						{/* DATE/TIME AND PEOPLES */}
						<div className='bg-[#E8ECF4] w-full flex justify-center items-center gap-12 px-5 py-1 rounded-[10px]'>
							<div className='flex flex-col items-center justify-center'>
								<h5 className='font-bold'>{data?.date}</h5>
								<span className='text-[10px] text-black/50'>{data?.time}</span>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<label className='text-[10px]'>{data?.peoples}</label>
								{/* SECONDARY PEOPLE CHECK */}
								{data?.secondaryPeoples && (
									<label className='text-[10px]'>{data?.secondaryPeoples}</label>
								)}
							</div>
						</div>
					</div>

					{/* ORDER INFO */}
					<div className='absolute flex flex-col items-center justify-center top-[300px] left-12 md:top-12 md:left-6 gap-2 md:gap-4 md:rotate-90'>
						<span className='md:text-[10px] text-GreenCooL'>Order No. {data?._id}</span>
						<img src={QR} alt='QR' className='relative md:w-[132px]' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ticket
