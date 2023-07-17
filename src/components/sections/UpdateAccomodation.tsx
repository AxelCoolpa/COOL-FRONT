import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { CgInfo } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

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
import Dropdown from '../dropdown'
import CategorySingleInput from '../inputs/CategorySingleInput'
import { accomodationCategories } from '../categories/accomodationCategories'

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
		category: '',
	})

	const [checkboxTypeValues, setCheckboxTypeValues] = useState('')

	const handleCheckboxTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			setCheckboxTypeValues(value)
			setFormData((prevFormData) => ({
				...prevFormData,
				category: value,
			}))
		} else {
			setCheckboxTypeValues('')
			setFormData((prevFormData) => ({
				...prevFormData,
				category: '',
			}))
		}
	}

	const [checkboxZoneValues, setCheckboxZoneValues] = useState([])

	const handleCheckboxZoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			setCheckboxZoneValues([...checkboxZoneValues, value])
			setFormData((prevFormData) => ({
				...prevFormData,
				zone: [...formData.zone, value],
			}))
		} else {
			setCheckboxZoneValues(checkboxZoneValues.filter((val) => val !== value))
			setFormData((prevFormData) => ({
				...prevFormData,
				zone: formData.zone.filter((val) => val !== value),
			}))
		}
	}

	const [checkboxAmenitiesValues, setCheckboxAmenitiesValues] = useState([])

	const handleCheckboxAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			setCheckboxAmenitiesValues([...checkboxAmenitiesValues, value])
			setFormData((prevFormData) => ({
				...prevFormData,
				amenities: [...formData.amenities, value],
			}))
		} else {
			setCheckboxAmenitiesValues(checkboxAmenitiesValues.filter((val) => val !== value))
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
			category,
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
			!price ||
			!category
		) {
			toast.error('Please complete all fields')
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
		data.append('category', category)

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
			toast.error('Error while sending the form')
		}
	}

	const { handleSearch, mapUrl, searchValue, setSearchValue } = useMaps(formData)

	const [editing, setEditing] = useState(false)

	const handleToggleEdit = () => {
		setEditing(!editing)

		if (!editing) {
			setFormData({
				name: accomodation?.name,
				description: accomodation?.description,
				roomsCount: accomodation?.roomsCount,
				bedsCount: accomodation?.bedsCount,
				maxOccupancy: accomodation?.maxOccupancy,
				bathRoomsCount: accomodation?.bathRoomsCount,
				amenities: accomodation?.amenities,
				location: accomodation?.location,
				zone: accomodation?.zone,
				images: accomodation?.images,
				startDate: accomodation?.startDate,
				endDate: accomodation?.endDate,
				price: accomodation?.price,
				category: accomodation?.category,
			})
			setCheckboxTypeValues(accomodation?.category)
			setCheckboxAmenitiesValues(accomodation?.amenities)
			setCheckboxZoneValues(accomodation?.zone)
			setSearchValue(accomodation?.location)
		}
	}

	console.log(formData)

	useEffect(() => {
		dispatch(accomodationById(accomodationID))
	}, [accomodationID, dispatch])

	return (
		<Container>
			<div className='flex flex-col md:items-center xl:items-start pt-14'>
				<h2 className='text-[32px] font-medium'>Update Accomodation</h2>
				<div className='flex flex-col items-center justify-center w-full transition'>
					{/* LOAD INFORMATION */}
					<div className='mx-auto py-5 xl:py-8 w-full xl:w-4/5 2xl:w-5/6'>
						{!editing ? (
							<div className=' flex items-center justify-between gap-4'>
								<Button label='Load information' onClick={handleToggleEdit} />
								<div className='pt-4'>
									<Dropdown
										button={
											<CgInfo size={60} color='#FFBC39' style={{ cursor: 'pointer' }} />
										}
										children={
											<div className='flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-CooL'>
												<p className='px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold transition duration-200'>
													If you want to update any current field of the accomodation
													click the above button to load the information.
												</p>
											</div>
										}
										classNames={'py-2 top-8 -left-[310px] md:-left-[310px] w-max'}
										animation='origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out'
									/>
								</div>
							</div>
						) : null}
					</div>

					{/* IMAGE */}
					<div className='mx-auto py-5 xl:py-8 w-full xl:w-4/5 2xl:w-5/6'>
						<DropZone onFilesSelected={handleFilesSelected} />
					</div>

					{/* SELECT TYPE */}
					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Select type
					</h3>
					<div className='flex flex-wrap col-span-5 gap-10 xl:gap-10 2xl:gap-20 items-center justify-center mx-auto py-5 xl:w-4/5 2xl:w-5/6'>
						{accomodationCategories.map((item) => (
							<ul key={item.label}>
								<CategorySingleInput
									handleChange={handleCheckboxTypeChange}
									label={item.label}
									id={item.label}
									name={item.label}
									value={item.label}
									bgColor={item.bgColor}
									secondaryBorderColor
									selected={checkboxTypeValues}
								/>
							</ul>
						))}
					</div>

					{/* FORM */}
					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Accomodation Info
					</h3>

					<div className='w-full xl:w-4/5 2xl:w-5/6 flex items-center justify-center md:gap-10 py-5 xl:py-8'>
						<AccomodationForm handleChange={handleChange} updateForm={formData} />
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
									checked={checkboxAmenitiesValues}
								/>
							</ul>
						))}
					</div>

					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Zone
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
									checked={checkboxZoneValues}
								/>
							</ul>
						))}
					</div>

					{/* MAP */}
					<div className='mx-auto py-5 w-full xl:py-8 xl:w-4/5 2xl:w-5/6'>
						<h3 className='text-2xl font-semibold'>Add location on map</h3>
						<form onSubmit={handleSearch} className='py-5 xl:py-8'>
							<div className='flex flex-col gap-10 w-full'>
								<div className='flex items-center gap-5 text-[#686868]'>
									<HiOutlineLocationMarker size={25} />
									<label>Which is the location?</label>
								</div>
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
							</div>
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
