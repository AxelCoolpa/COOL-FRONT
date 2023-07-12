/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
// import Select from 'react-select'

import { categories } from '../categories/categories'

import { useCurrentUser } from '../../hooks/useCurrentUser'
// import { selectDestinations } from '../../features/destinationSlice'
// import { Destination } from './AddActivity'
import {
	destinationById,
	selectDestinationById,
} from '../../features/destinationByIdSlice'
import {
	updateActivity,
	updateActivityFormData,
} from '../../features/updateActivitySlice'

import DropZone from '../inputs/DropZone'
import ActivityForm from '../forms/ActivityForm'
import CategoryInput from '../inputs/CategoryInput'
import Map from '../Map'
import Button from '../buttons/Button'
import Container from '../containers/Container'

const UpdateActivity = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { id } = useParams()
	const activityID = id

	const { currentUserId } = useCurrentUser()

	const activity = useSelector(selectDestinationById)

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
				categories: [...formData?.category, value],
			}))
		} else {
			setCheckboxValues(checkboxValues.filter((val) => val !== value))
			setFormData((prevFormData) => ({
				...prevFormData,
				categories: formData?.category.filter((val) => val !== value),
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
			console.log('Por favor, complete todos los campos')
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
		// data.append('idDestination', idDestination)

		for (let i = 0; i < formData.galleryImage.length; i++) {
			data.append('galleryImage', formData.galleryImage[i])
		}

		formData.category.forEach((category) => {
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
		} catch (error) {
			console.log('Error al enviar el formulario:', error)
		}
	}

	useEffect(() => {
		dispatch(destinationById(activityID))
	}, [activityID, dispatch])

	return (
		<Container>
			<div className='flex flex-col md:items-center xl:items-start pt-14'>
				<h2 className='text-[32px] font-medium'>Update activity</h2>
				<form
					onSubmit={handleUpdate}
					className='flex flex-col items-center justify-center w-full transition'
				>
					<div className='mx-auto py-5 xl:py-8 w-full xl:w-4/5 2xl:w-5/6'>
						<DropZone onFilesSelected={handleFilesSelected} />
					</div>

					{/* <div className='flex items-center justify-between mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						<h3 className='text-2xl font-semibold'>Select destination</h3>
						<Button
							label={enabled === true ? 'Disabled' : 'Enabled'}
							onClick={handleEnabledSelect}
							w={10}
							outline
							small
						/>
					</div>
					<div className='mx-auto py-5 w-full md:4/5 xl:w-4/5 2xl:w-5/6'>
						<Select
							options={destinations}
							value={selectedDestination}
							onChange={handleDestinationChange}
							isDisabled={enabled}
							placeholder='Change destination'
							defaultValue={selectedDestination}
							isClearable
							formatOptionLabel={(option: any) => (
								<div className='flex flex-row items-center gap-3'>
									<div>
										<span className='text-neutral-500'>{option.title}</span>
									</div>
								</div>
							)}
							classNames={{
								control: () => 'p-3 border-2',
								input: () => 'text-lg',
								option: () => 'text-lg',
							}}
							styles={{
								control: (provided: any) => ({
									...provided,
									width: '100%',
									height: '20px',
									minHeight: '60px',
									borderRadius: '10px',
								}),
								singleValue: (provided: any) => ({
									...provided,
									display: 'flex',
									alignItems: 'center',
								}),
							}}
							theme={(theme) => ({
								...theme,
								borderRadius: 6,
								colors: {
									...theme.colors,
									primary: 'white',
									primary25: '#ce452a60',
								},
							})}
						/>
					</div> */}

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
					<div className='mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						<h3 className='text-2xl font-semibold'>Adventure location</h3>
						<div className='flex flex-col items-center py-10'>
							<Map />
						</div>
					</div>

					{/* BUTTONS */}
					<div className='flex flex-col lg:flex-row items-center justify-evenly gap-4 lg:gap-20 mx-auto py-10 w-full'>
						<div className='w-full lg:w-2/5 xl:w-2/6'>
							<Button label='Back' card outline onClick={() => navigate('/provider')} />
						</div>
						<div className='w-full lg:w-2/5 xl:w-2/6'>
							<Button label='Save' card type='submit' />
						</div>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default UpdateActivity
