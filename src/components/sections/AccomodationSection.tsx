import React, { useState } from 'react'

import { Card, CardBody } from '@material-tailwind/react'

import HeaderSection from './HeaderSection'
import MainCard from '../listings/Card'
import { selectAccomodation } from '../../features/accomodationSlice'
import { useSelector } from 'react-redux'
import { accomodationCategories } from '../categories/accomodationCategories'
import CategoryInput from '../inputs/CategoryInput'

const AccomodationSection = () => {
	const allAccomodations = useSelector(selectAccomodation)
	const accomodations = allAccomodations.filter(
		(accomodation) => accomodation.itDeleted === false
	)
console.log(accomodations)
	const randomAccomodation = accomodations
		? accomodations[Math.floor(Math.random() * accomodations.length)]
		: null

	const [checkboxValues, setCheckboxValues] = useState([])

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

	const filteredAccomodations = accomodations.filter((accomodation) => {
		if (checkboxValues.length === 0) {
			return true
		} else {
			return checkboxValues.some((category) => accomodation.category.includes(category))
		}
	})

	return (
		<>
			<div className='mt-20 gap-3 lg:mx-3'>
				<div className='flex flex-col gap-4 items-center pb-8'>
					<h3 className='text-5xl font-bold'>Accomodation</h3>
					<h3 className='text-2xl'>Choose your favorite Accommodation</h3>
				</div>

				<HeaderSection
					title={randomAccomodation?.name}
					subtitle={randomAccomodation?.location}
					image={randomAccomodation?.images[0]}
				/>

				<div className='px-5 pt-28'>
					<h3 className='text-2xl font-semibold'>Types</h3>
					<div className='flex flex-row flex-wrap items-center justify-center min-[1320px]:justify-between pt-5 gap-4'>
						{accomodationCategories.map((item) => (
							<ul key={item.label}>
								<CategoryInput
									handleChange={handleCheckboxChange}
									id={item.label}
									name={item.label}
									value={item.label}
									label={item.label}
									// icon={item.icon}
									secondaryBorderColor
								/>
							</ul>
						))}
					</div>
				</div>

				<Card className='mt-20'>
					<CardBody>
						<div>
							<div className='flex px-5'>
								<div className='grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 min-[1540px]:grid-cols-5 min-[1640px]:grid-cols-6 gap-1'>
									{filteredAccomodations?.map((accomodation) => (
										<MainCard key={accomodation._id} data={accomodation} />
									))}
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	)
}

export default AccomodationSection
