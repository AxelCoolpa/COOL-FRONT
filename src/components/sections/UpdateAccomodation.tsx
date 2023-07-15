import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { FiSearch } from 'react-icons/fi'

import { useMaps } from '../../hooks/useMaps'
import { useCurrentUser } from '../../hooks/useCurrentUser'

import { categories } from '../categories/categories'
import { amenitiesCategories } from '../categories/amenitiesCategories'

import {
	updateAccomodation,
	updateAccomodationFormData,
} from '../../features/updateAccomodationSlice'
import {
	accomodationById,
	selectAccomodationById,
} from '../../features/accomodationByIdSlice'

import Container from '../containers/Container'
import DropZone from '../inputs/DropZone'
import AccomodationForm from '../forms/AccomodationForm'
import CategoryInput from '../inputs/CategoryInput'
import Input from '../inputs/Input'
import Map from '../Map'
import Button from '../buttons/Button'

const UpdateRoom = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { id } = useParams()
	const accomodationID = id

	const { currentUserId } = useCurrentUser()
	const accomodation = useSelector(selectAccomodationById)

	const [formData, setFormData] = useState<updateAccomodationFormData>({
		name: '',
		description: '',
		roomsCount: 0,
		bedsCount: 0,
		maxOccupancy: 0,
		bathRoomsCount: 0,
		amenities: [],
		location: '',
		zone: [],
		images: [],
		startDate: '',
		endDate: '',
		price: 0,
		// idDestination: '',
		category: '',
	})

	const handleCheckboxZoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			setFormData((prevFormData) => ({
				...prevFormData,
				zone: [...formData.zone, value],
			}))
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				zone: formData.zone.filter((val) => val !== value),
			}))
		}
	}

	const handleCheckboxAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			setFormData((prevFormData) => ({
				...prevFormData,
				amenities: [...formData.amenities, value],
			}))
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				amenities: formData.amenities.filter((val) => val !== value),
			}))
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}))
	}

	const handleFilesSelected = (files: File[]) => {
		const updatedGallery = [...formData.images, ...files]
		setFormData((prevFormData) => ({
			...prevFormData,
			images: updatedGallery,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const {
			name,
			description,
			roomsCount,
			bedsCount,
			maxOccupancy,
			bathRoomsCount,
			amenities,
			location,
			zone,
			images,
			startDate,
			endDate,
			price,
			// idDestination,
		} = formData

		if (
			!name ||
			!description ||
			!roomsCount ||
			!bedsCount ||
			!maxOccupancy ||
			!bathRoomsCount ||
			!amenities ||
			!location ||
			!zone ||
			!images ||
			!startDate ||
			!endDate ||
			!price
		) {
			toast.error('Por favor, complete todos los campos')
			return
		}

		const data = new FormData()
		data.append('name', name)
		data.append('description', description)
		data.append('roomsCount', roomsCount)
		data.append('bedsCount', bedsCount)
		data.append('maxOccupancy', maxOccupancy)
		data.append('bathRoomsCount', bathRoomsCount)
		data.append('location', location)
		data.append('startDate', startDate)
		data.append('endDate', endDate)
		data.append('price', price)
		// data.append('idDestination', idDestination)

		for (let i = 0; i < formData.images.length; i++) {
			data.append('images', formData.images[i])
		}

		formData.amenities.forEach((amenity) => {
			data.append('amenities', amenity)
		})

		formData.zone.forEach((zone) => {
			data.append('zone', zone)
		})

		try {
			dispatch(updateAccomodation(data, currentUserId, accomodationID))
		} catch (error: any) {
			toast.error('Error al enviar el formulario:', error)
		}
	}

	const { handleSearch, mapUrl, searchValue, setSearchValue } = useMaps(formData)

	useEffect(() => {
		dispatch(accomodationById(accomodationID))
	}, [accomodationID, dispatch])

	return (
		<Container>
			<div className='flex flex-col md:items-center xl:items-start pt-14'>
				<h2 className='text-[32px] font-medium'>Update Accomodation</h2>
				<div className='flex flex-col items-center justify-center w-full transition'>
					{/* IMAGE */}
					<div className='mx-auto py-5 xl:py-8 w-full xl:w-4/5 2xl:w-5/6'>
						<DropZone onFilesSelected={handleFilesSelected} />
					</div>

					{/* FORM */}
					<div className='w-full xl:w-4/5 2xl:w-5/6 flex items-center justify-center md:gap-10 py-5 xl:py-8'>
						<AccomodationForm
							handleChange={handleChange}
							updateForm={formData}
							data={accomodation}
						/>
					</div>

					{/* CATEGORIES */}
					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Amenities
					</h3>

					<div className='flex flex-wrap col-span-5 gap-10 xl:gap-10 2xl:gap-20 items-center justify-center mx-auto py-5 xl:w-4/5 2xl:w-5/6'>
						{amenitiesCategories.map((item) => (
							<ul key={item.label}>
								<CategoryInput
									handleChange={handleCheckboxAmenitiesChange}
									label={item.label}
									icon={item.icon}
									id={item.label}
									name={item.label}
									value={item.label}
									bgColor={item.bgColor}
									iconColor={item.iconColor}
								/>
							</ul>
						))}
					</div>

					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Accomodation Zone
					</h3>

					<div className='flex flex-wrap col-span-5 gap-10 xl:gap-10 2xl:gap-20 items-center justify-center mx-auto py-5 xl:w-4/5 2xl:w-5/6'>
						{categories.map((item) => (
							<ul key={item.label}>
								<CategoryInput
									handleChange={handleCheckboxZoneChange}
									label={item.label}
									icon={item.icon}
									id={item.label}
									name={item.label}
									value={item.label}
								/>
							</ul>
						))}
					</div>

					{/* MAP */}
					<div className='mx-auto py-5 w-full xl:py-8 xl:w-4/5 2xl:w-5/6'>
						<h3 className='text-2xl font-semibold'>Add location on map</h3>
						<form onSubmit={handleSearch} className='py-5 xl:py-8'>
							<Input
								type='search'
								placeholder='Search your location'
								id='location'
								name='location'
								handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setSearchValue(e.target.value)
								}
								value={searchValue}
								secondaryIcon={FiSearch}
								secondaryIconColor='OrangeCooL'
							/>
						</form>
						<div className='flex flex-col items-center py-10'>
							<Map mapURL={mapUrl} />
						</div>
					</div>

					{/* BUTTONS */}
					<div className='flex flex-col lg:flex-row items-center justify-evenly gap-4 lg:gap-20 mx-auto py-10 w-full'>
						<div className='w-full lg:w-2/5 xl:w-2/6'>
							<Button label='Back' card outline onClick={() => navigate('/provider')} />
						</div>
						<div className='w-full lg:w-2/5 xl:w-2/6'>
							<Button label='Save' card onClick={handleSubmit} />
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default UpdateRoom
