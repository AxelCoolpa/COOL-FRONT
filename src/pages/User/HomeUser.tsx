import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
	selectDestinations,
	selectError,
	selectLoading,
} from '../../features/destinationSlice'

import { categories } from '../../components/categories/categories'
import HeaderSection from '../../components/sections/HeaderSection'
import ListingCard from '../../components/listings/ListingCard'
import CategoryInput from '../../components/inputs/CategoryInput'

const HomeUser = () => {
	const destinations = useSelector(selectDestinations)
	const discover = destinations[Math.floor(Math.random() * destinations.length)]
	const [checkboxValues, setCheckboxValues] = useState([])
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)

	if (loading) {
		return <div>Cargando destinos...</div>
	}
	if (error) {
		return <div>Error al cargar destinos: {error} </div>
	}

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked
		if (isChecked) {
			setCheckboxValues([...checkboxValues, value])
		} else {
			setCheckboxValues((prevCheckboxValues) =>
				prevCheckboxValues.filter((val) => val !== value)
			)
		}
	}
	console.log(checkboxValues)

	const filteredDestinations = destinations.filter((destination) => {
		if (checkboxValues.length === 0) {
			console.log('ninguna seleccionada')
			return true
		} else {
			return checkboxValues.some((category) => destination.categories.includes(category))
		}
	})

	return (
		<div className='mt-12 gap-3 lg:mx-3'>
		<div className='flex flex-col w-full'>
			<HeaderSection
				title='THE PLACE OF YOUR DREAMS'
				subtitle='Explore the best destinations in the world'
				image={discover?.gallery[0]}
				/>
			<div className='px-5 pt-28'>
				{/* <h3 className='text-2xl font-semibold'>Categories</h3>
				<div className='flex flex-row items-center justify-between pt-5'>
					{categories.map((item) => (
						<ul key={item.label}>
							<CategoryInput
								handleChange={handleCheckboxChange}
								id={item.label}
								name={item.label}
								value={item.label}
								label={item.label}
								icon={item.icon}
							/>
						</ul>
					))}
				</div> */}
			</div>

			<div className='px-5 pt-10'>
				{!loading && !error && (
					<div className='pt-10 px-8 grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-11'>
						{filteredDestinations.map((listing) => (
							<ListingCard key={listing._id} data={listing} />
						))}
					</div>
				)}
			</div>
		</div>
		</div>
	)
}

export default HomeUser
