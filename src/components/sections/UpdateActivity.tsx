/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { useCurrentUser } from '../../hooks/useCurrentUser'

import { categories } from '../categories/categories'

// import { selectDestinations } from '../../features/destinationSlice'
// import { Destination } from './AddActivity'
import { activityById, selectActivityById } from '../../features/activityByIdSlice'
import {
	updateActivity,
	updateActivityFormData,
} from '../../features/updateActivitySlice'

// import Select from 'react-select'
import DropZone from '../inputs/DropZone'
import ActivityForm from '../forms/ActivityForm'
import CategoryInput from '../inputs/CategoryInput'
import Map from '../Map'
import Button from '../buttons/Button'
import Container from '../containers/Container'
import axios from 'axios'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Input from '../inputs/Input'
import { FiSearch } from 'react-icons/fi'

const UpdateActivity = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { id } = useParams()
	const activityID = id

	const { currentUserId } = useCurrentUser()

	const activity = useSelector(selectActivityById)

	// const destinationsList = useSelector(selectDestinations)
	// const [destinations, setDestinations] = useState<Destination[]>([])
	// const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
	// const [enabled, setEnabled] = useState(true)

	const [formData, setFormData] = useState<updateActivityFormData>({
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
		// idDestination: ''
	})

	const [checkboxValues, setCheckboxValues] = useState([])

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			setCheckboxValues([...checkboxValues, value])
			setFormData((prevFormData) => ({
				...prevFormData,
				category: [...formData?.category, value],
			}))
		} else {
			setCheckboxValues(checkboxValues.filter((val) => val !== value))
			setFormData((prevFormData) => ({
				...prevFormData,
				category: formData?.category.filter((val) => val !== value),
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

	// const handleEnabledSelect = () => {
	// 	setEnabled(!enabled)
	// }

	// const handleDestinationChange = (selectedOption: any) => {
	// 	setSelectedDestination(selectedOption)
	// 	setFormData((prevFormData) => ({
	// 		...prevFormData,
	// 		idDestination: selectedOption?._id,
	// 	}))
	// }

	const handleFilesSelected = (files: File[]) => {
		const updatedGallery = [...formData.galleryImage, ...files]
		setFormData((prevFormData) => ({
			...prevFormData,
			galleryImage: updatedGallery,
		}))
	}

	const handleUpdate = async (e: React.FormEvent) => {
		e.preventDefault()

		const {
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
			console.log({
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
			})
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

		for (let i = 0; i < galleryImage.length; i++) {
			data.append('galleryImage', galleryImage[i])
		}

		category.forEach((category) => {
			data.append('category', category)
		})

		try {
			await dispatch(updateActivity(data, currentUserId, activityID))
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
			})
		} catch (error: any) {
			toast.error('Error al enviar el formulario:', error)
		}
	}

	const [searchValue, setSearchValue] = useState('')
	const [mapUrl, setMapUrl] = useState('')

	const handleSearch = async (e: React.FormEvent) => {
		e.preventDefault()

		// Genera la URL de búsqueda del mapa utilizando el valor del input de búsqueda
		const apiKey = 'AIzaSyAwRA7j_Pu_T8dD6J1GGzf7nIdGq2z9c0c'
		try {
			// Realiza la solicitud a la API de Geocodificación
			const response = await axios('https://maps.googleapis.com/maps/api/geocode/json', {
				params: {
					address: searchValue,
					key: apiKey,
				},
			})

			// Obtiene los resultados de la búsqueda
			const results = response.data.results

			// Genera la URL de búsqueda del mapa utilizando la primera ubicación encontrada
			if (results.length > 0) {
				formData.location = results[0].formatted_address
				const location = results[0].geometry.location
				const url = `https://maps.google.com/maps?q=${location.lat},${location.lng}&output=embed`
				setMapUrl(url)
			} else {
				toast('Warning ! The address entered is incorrect', {
					icon: '⚠️',
					style: {
						background: '#ff9800',
						color: '#fff',
					},
				})
			}
		} catch (error) {
			console.error('Error en la solicitud a la API de Geocodificación:', error)
		}
	}

	useEffect(() => {
		dispatch(activityById(activityID))
	}, [activityID, dispatch])

	return (
		<Container>
			<div className='flex flex-col md:items-center xl:items-start pt-14'>
				<h2 className='text-[32px] font-medium'>Update activity</h2>
				<div className='flex flex-col items-center justify-center w-full transition'>
					<div className='mx-auto py-5 xl:py-8 w-full xl:w-4/5 2xl:w-5/6'>
						<DropZone onFilesSelected={handleFilesSelected} />
					</div>

					{/* FORM */}
					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Activity Info
					</h3>

					<div className='w-full xl:w-4/5 2xl:w-5/6 flex items-center justify-center md:gap-10 py-5 xl:py-8'>
						<ActivityForm
							handleChange={handleChange}
							updateForm={formData}
							data={activity}
						/>
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
							<Button label='Back' card outline onClick={() => navigate('/provider')} />
						</div>
						<div className='w-full lg:w-2/5 xl:w-2/6'>
							<Button label='Save' card onClick={handleUpdate} />
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default UpdateActivity
