import Input from './inputs/Input'

const BookingBar = () => {
	return (
		<div className='absolute hidden xl:flex justify-between items-center w-11/12 p-5 bg-white shadow-black/30 shadow-lg -bottom-16 rounded-lg px-10'>
			<div className='flex flex-col  justify-center gap-2'>
				<span className='font-bold'>Location</span>
				<Input id='location' placeholder='Location' />
			</div>
			<div className='flex flex-col  justify-center gap-2'>
				<span className='font-bold'>Start date</span>
				<Input id='starDate' placeholder='---/-----/--' />
			</div>
			<div className='flex flex-col  justify-center gap-2'>
				<span className='font-bold'>Ending date</span>
				<Input id='endDate' placeholder='---/-----/--' />
			</div>
			<div className='flex flex-col  justify-center  gap-2'>
				<span className='font-bold'>Peoples</span>
				<Input id='peoples' placeholder='1 adult' />
			</div>
			<div className='bg-[#CE452A] w-[147px] gap-2 text-white rounded-lg text-center cursor-pointer'>
				<button className='font-bold p-4' onClick={() => alert('Search')}>
					Search
				</button>
			</div>
		</div>
	)
}

export default BookingBar
