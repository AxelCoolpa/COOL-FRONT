/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-hot-toast'

import { categories } from '../categories/categories'
import {
	createAdventure,
	createAdventureFormData,
} from '../../features/createAdventureSlice'
import { selectUsers } from '../../features/usersSlice'

import DropZone from '../inputs/DropZone'
import ActivityForm from '../forms/ActivityForm'
import ProviderCard from '../listings/ProviderCard'
import CategoryInput from '../inputs/CategoryInput'
import Map from '../Map'
import Button from '../buttons/Button'
import Container from '../containers/Container'

const AddAdventure = () => {
	const dispatch = useDispatch()

	const users = useSelector(selectUsers)
	const userID = users[1]?._id

	const [formData, setFormData] = useState<createAdventureFormData>({
		title: '',
		description: '',
		individualPrice: '',
		groupPrice: '',
		gallery: [],
		categories: [],
		location: '',
		activities: [],
		starterPack: [],
		startTime: [],
		endTime: [],
	})

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			setFormData((prevFormData) => ({
				...prevFormData,
				categories: [...formData.categories, value],
			}))
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				categories: formData.categories.filter((val) => val !== value),
			}))
		}
	}

	// formData.categories = checkboxValues
	// console.log(formData.categories)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}))
	}

	const handleFilesSelected = (files: File[]) => {
		const updatedGallery = [...formData.gallery, ...files]
		setFormData((prevFormData) => ({
			...prevFormData,
			gallery: updatedGallery,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const {
			title,
			description,
			individualPrice,
			groupPrice,
			gallery,
			categories,
			location,
			activities,
			starterPack,
			startTime,
			endTime,
		} = formData

		if (
			!title ||
			!description ||
			!individualPrice ||
			!groupPrice ||
			!gallery ||
			!categories ||
			!location ||
			!activities ||
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
		data.append('activities', activities)
		data.append('starterPack', starterPack)
		data.append('startTime', startTime)
		data.append('endTime', endTime)

		for (let i = 0; i < formData.gallery.length; i++) {
			data.append('gallery', formData.gallery[i])
		}

		formData.categories.forEach((category) => {
			data.append('categories', category)
		})

		try {
			await dispatch(createAdventure(data, userID))
			setFormData({
				title: '',
				description: '',
				individualPrice: '',
				groupPrice: '',
				gallery: [],
				categories: [],
				location: '',
				activities: [],
				starterPack: [],
				startTime: [],
				endTime: [],
			})

			await setTimeout(() => {
				window.location.reload()
			}, 1000)
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
