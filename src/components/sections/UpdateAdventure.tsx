import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { toast } from 'react-hot-toast'

import { categories } from '../categories/categories'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'

import { useCurrentUser } from '../../hooks/useCurrentUser'
import {
	destinationById,
	selectDestinationById,
} from '../../features/destinationByIdSlice'
import {
	updateAdventureFormData,
	updateAdventure,
} from '../../features/updateAdventureSlice'

import AdventureForm from '../forms/AdventureForm'
import CategoryInput from '../inputs/CategoryInput'
import Map from '../Map'
import Button from '../buttons/Button'
import Container from '../containers/Container'
import CloudinaryUploadImg from '../cloudinary/ImageUpload'
import Input from '../inputs/Input'

const UpdateAdventure = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { id } = useParams()
	const destinationID = id

	const { currentUserId } = useCurrentUser()
	const userID = currentUserId

	const destination = useSelector(selectDestinationById)

	const [formData, setFormData] = useState<updateAdventureFormData>({
		title: '',
		description: '',
		galleryImage: '',
		categories: [],
		location: '',
	})

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			setFormData((prevFormData) => ({
				...prevFormData,
				categories: [...formData?.categories, value],
			}))
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				categories: formData?.categories.filter((val) => val !== value),
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

	const handleUpload = (picture: any) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			galleryImage: picture,
		}))
	}

	const handleUpdate = async (e: React.FormEvent) => {
		e.preventDefault()

		const { title, description, galleryImage, categories, location } = formData

		if (!title || !description || !galleryImage || !categories || !location) {
			toast.error('Por favor, complete todos los campos')
			console.log({
				title,
				description,
				galleryImage,
				categories,
				location,
			})
			return
		}

		const data = new FormData()
		data.append('title', title)
		data.append('description', description)
		data.append('galleryImage', galleryImage)
		data.append('location', location)

		formData?.categories.forEach((category) => {
			data.append('categories', category)
		})

		try {
			await dispatch(updateAdventure(data, userID, destinationID))
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
		dispatch(destinationById(destinationID))
	}, [destinationID, dispatch])

	return (
		<Container>
			<div className='flex flex-col md:items-center xl:items-start pt-14'>
				<h2 className='text-[32px] font-medium'>Update adventure</h2>
				<div className='flex flex-col items-center justify-center w-full transition'>
					{/* IMAGE */}
					<div className='mx-auto py-5 xl:py-8 w-full xl:w-4/5 2xl:w-5/6'>
						<CloudinaryUploadImg onUpload={handleUpload} />
					</div>

					{/* FORM */}
					<div className='w-full xl:w-4/5 2xl:w-5/6 flex items-center justify-center md:gap-10 py-5 xl:py-8'>
						<AdventureForm
							handleChange={handleChange}
							updateForm={formData}
							data={destination}
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
							<Button label='Back' card outline onClick={() => navigate('/admindash')} />
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

export default UpdateAdventure
