 import { useState } from 'react';
import Input from './inputs/Input'
import { FilterForm, filterActivities } from '../features/activitiesSlice';
import { useDispatch } from 'react-redux';

const BookingBar = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState<FilterForm>({
		location: '',
		startDate: '',
		endDate: '',
		maxPeople: ''
	});

	const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
		...formData,
	[e.target.id]: e.target.value
		});
	};
	
	const handleSearch = (e:React.FormEvent) => {
        e.preventDefault()
		console.log(formData)
       dispatch(filterActivities(formData))
	}

	return (
		<div className='absolute hidden xl:flex justify-between items-center w-11/12 p-5 bg-white shadow-black/30 shadow-lg -bottom-16 rounded-lg px-10'>
			<form onSubmit={handleSearch}>
			<div className='flex flex-col  justify-center gap-2'>
				<span className='font-bold'>Location</span>
				<Input id='location' placeholder='Location' booking value={formData.location} handleChange={handleInputChange} />
			</div>
			<div className='flex flex-col  justify-center gap-2'>
				<span className='font-bold'>Start date</span>
				<Input id='startDate' type="date" placeholder='---/-----/--' booking value={formData.startDate} handleChange={handleInputChange} />
			</div>
			<div className='flex flex-col  justify-center gap-2'>
				<span className='font-bold'>Ending date</span>
				<Input id='endDate' type="date" placeholder='---/-----/--' booking value={formData.endDate} handleChange={handleInputChange} />
			</div>
			<div className='flex flex-col  justify-center  gap-2'>
				<span className='font-bold'>Peoples</span>
				<Input id='peoples' placeholder='1 adult' booking value={formData.maxPeople} handleChange={handleInputChange} />
			</div>
			<div className='bg-[#CE452A] w-[147px] gap-2 text-white rounded-lg text-center cursor-pointer'>
				<button className='font-bold p-4' type="submit">
					Search
				</button>
			</div>
		</form>
		</div>
	)
}

export default BookingBar
