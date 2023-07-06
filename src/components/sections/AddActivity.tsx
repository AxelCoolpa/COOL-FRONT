/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'

import { useCurrentUser } from '../../hooks/useCurrentUser'

import { toast } from 'react-hot-toast'

import { categories } from '../categories/categories'

import { createActiviy, createActiviyFormData } from '../../features/createActivitySlice'

import DropZone from '../inputs/DropZone'
import ActivityForm from '../forms/ActivityForm'
import ProviderCard from '../listings/ProviderCard'
import CategoryInput from '../inputs/CategoryInput'
import Map from '../Map'
import Button from '../buttons/Button'
import Container from '../containers/Container'
import { selectDestinations } from '../../features/destinationSlice'

interface Destination {
	_id: string
	title: string
	description: string
	categories: string[]
	location: string
}

const AddAdventure = () => {
	const dispatch = useDispatch()

	const { currentUserId } = useCurrentUser()

	const [destinations, setDestinations] = useState<Destination[]>([])
	const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

	const destinationsList = useSelector(selectDestinations)
	console.log(destinationsList)

	const idDestination = destinationsList[destinationsList.length - 1]
	console.log(idDestination)

	const [formData, setFormData] = useState<createActiviyFormData>({
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
	formData.idDestination = idDestination
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
	}

	const handleFilesSelected = (files: File[]) => {
		const updatedGallery = [...formData.galleryImage, ...files]
		setFormData((prevFormData) => ({
			...prevFormData,
			galleryImage: updatedGallery,
		}))
	}
	console.log(formData)

	const handleSubmit = async (e: React.FormEvent) => {
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
			await dispatch(createActiviy(data, currentUserId))
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

	return (
		<Container>
			<div className='flex flex-col md:items-center xl:items-start pt-14'>
				<h2 className='text-[32px] font-medium'>Add adventure</h2>
				<form onSubmit={handleSubmit}>
					<div className='mx-auto py-5 xl:w-4/5 2xl:w-5/6'>
						<DropZone onFilesSelected={handleFilesSelected} />
					</div>
					<Select
						options={destinations}
						value={selectedDestination}
						onChange={handleDestinationChange}
						placeholder='Select Destination'
						styles={{
							control: (provided: any) => ({
								...provided,
								height: '20px',
								minHeight: '40px',
								boxShadow: 'none',
								// border: 'none',
							}),
							singleValue: (provided: any) => ({
								...provided,
								display: 'flex',
								alignItems: 'center',
							}),
						}}
					/>
					<div className='grid grid-cols-1 xl:grid-cols-7 md:gap-10 pt-16'>
						<ActivityForm handleChange={handleChange} form={formData} />
						<div className='xl:col-span-2 flex xl:scale-[80%] min-[1440px]:scale-100'>
							<ProviderCard />
						</div>
					</div>

					<h3 className='text-2xl font-semibold py-8'>Category adventure</h3>

					<div className='grid grid-cols-1 xl:grid-cols-7 md:gap-10 pb-14'>
						<div className='flex flex-wrap col-span-5 gap-10 xl:gap-10 2xl:gap-20 items-center justify-center'>
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
						<div className='xl:col-span-2'>
							<h3 className='text-2xl font-semibold'>Adventure location</h3>
							<div className='flex flex-col items-center py-10'>
								<Map w={400} h={260} />
							</div>
							<div className='mx-auto w-full lg:w-2/5 xl:w-full'>
								<Button label='Ready' card />
							</div>
						</div>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default AddAdventure
