import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useCurrentUser } from '../../hooks/useCurrentUser'
import { useMaps } from '../../hooks/useMaps'

import { toast } from 'react-hot-toast'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'

import { categories } from '../categories/categories'

import { selectDestinations } from '../../features/destinationSlice'
import {
	createActivity,
	createActivityFormData,
} from '../../features/createActivitySlice'

import DropZone from '../inputs/DropZone'
import ActivityForm from '../forms/ActivityForm'
import CategoryInput from '../inputs/CategoryInput'
import Map from '../Map'
import Button from '../buttons/Button'
import Container from '../containers/Container'
import Input from '../inputs/Input'
import SelectDestination from '../inputs/Select'

export interface Destination {
	_id: string
	title: string
	description: string
	categories: string[]
	location: string
}

const AddAdventure = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { currentUserId } = useCurrentUser()
	const destinationsList = useSelector(selectDestinations)

	const [destinations, setDestinations] = useState<Destination[]>([])
	const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

	const [formData, setFormData] = useState<createActivityFormData>({
		title: '',
		description: '',
		location: '',
		galleryImage: [],
		videoLink: '',
		category: [],
		individualPrice: '',
		groupPrice: '',
		starterPack: '',
		startTime: '',
		endTime: '',
		idDestination: '',
	})

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			setFormData((prevFormData) => ({
				...prevFormData,
				category: [...formData.category, value],
			}))
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				category: formData.category.filter((val) => val !== value),
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

	const handleDestinationChange = (selectedOption: any) => {
		setSelectedDestination(selectedOption)
		setFormData((prevFormData) => ({
			...prevFormData,
			idDestination: selectedOption?._id,
		}))
	}

	const handleFilesSelected = (files: File[]) => {
		const updatedGallery = [...formData.galleryImage, ...files]
		setFormData((prevFormData) => ({
			...prevFormData,
			galleryImage: updatedGallery,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const {
			idDestination,
			title,
			description,
			individualPrice,
			groupPrice,
			galleryImage,
			category,
			location,
			videoLink,
			starterPack,
			startTime,
			endTime,
		} = formData

		if (
			!idDestination ||
			!title ||
			!description ||
			!individualPrice ||
			!groupPrice ||
			!galleryImage ||
			!category ||
			!location ||
			!videoLink ||
			!starterPack ||
			!startTime ||
			!endTime
		) {
			toast.error('Por favor, complete todos los campos')
			return
		}

		const data = new FormData()
		data.append('title', title)
		data.append('description', description)
		data.append('individualPrice', individualPrice)
		data.append('groupPrice', groupPrice)
		data.append('location', location)
		data.append('videoLink', videoLink)
		data.append('starterPack', starterPack)
		data.append('startTime', startTime)
		data.append('endTime', endTime)
		data.append('idDestination', idDestination)

		for (let i = 0; i < formData.galleryImage.length; i++) {
			data.append('galleryImage', formData.galleryImage[i])
		}

		formData.category.forEach((category) => {
			data.append('category', category)
		})

		try {
			await dispatch(createActivity(data, currentUserId))
			setFormData({
				title: '',
				description: '',
				individualPrice: '',
				groupPrice: '',
				galleryImage: [],
				category: [],
				location: '',
				videoLink: '',
				starterPack: '',
				startTime: '',
				endTime: '',
				idDestination: '',
			})
		} catch (error) {
			console.log('Error al enviar el formulario:', error)
		}
	}

	const { handleSearch, mapUrl, searchValue, setSearchValue } = useMaps(formData)

	useEffect(() => {
		setDestinations(destinationsList)
	}, [destinationsList])

	const formatOptionLabel = (option: any) => (
		<div className='flex flex-row items-center gap-3'>
			<div>
				<span className='text-neutral-500'>{option.title}</span>
			</div>
		</div>
	)

	return (
		<Container>
			<div className='flex flex-col md:items-center xl:items-start pt-14'>
				<h2 className='text-[32px] font-medium'>Add adventure</h2>
				<div className='flex flex-col items-center justify-center w-full transition'>
					<div className='mx-auto py-5 xl:py-8 w-full xl:w-4/5 2xl:w-5/6'>
						<DropZone onFilesSelected={handleFilesSelected} />
					</div>

					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Select destination
					</h3>
					<div className='mx-auto py-5 w-full md:4/5 xl:w-4/5 2xl:w-5/6'>
						<SelectDestination
							options={destinations}
							value={selectedDestination}
							onChange={handleDestinationChange}
							formatOptionLabel={formatOptionLabel}
						/>
					</div>

					{/* FORM */}
					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Activity Info
					</h3>

					<div className='w-full xl:w-4/5 2xl:w-5/6 flex items-center justify-center md:gap-10 py-5 xl:py-8'>
						<ActivityForm handleChange={handleChange} form={formData} />
					</div>

					{/* CATEGORIES */}
					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Category adventure
					</h3>

					<div className='flex flex-wrap col-span-5 gap-10 xl:gap-10 2xl:gap-20 items-center justify-center mx-auto py-5 xl:w-4/5 2xl:w-5/6'>
						{categories.map((item) => (
							<ul key={item.label}>
								<CategoryInput
									handleChange={handleCheckboxChange}
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
							<Button label='Back' card outline onClick={() => navigate('/admindash')} />
						</div>
						<div className='w-full lg:w-2/5 xl:w-2/6'>
							<Button label='Create' card onClick={handleSubmit} />
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default AddAdventure