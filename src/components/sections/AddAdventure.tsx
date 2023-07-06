/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-hot-toast'

import { categories } from '../categories/categories'
import {
	createAdventure,
	createAdventureFormData,
} from '../../features/createAdventureSlice'

import AdventureForm from '../forms/AdventureForm'
import CategoryInput from '../inputs/CategoryInput'
import Map from '../Map'
import Button from '../buttons/Button'
import Container from '../containers/Container'
import CloudinaryUploadImg from '../cloudinary/ImageUpload'
import { useCurrentUser } from '../../hooks/useCurrentUser'

const AddAdventure = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { currentUserId } = useCurrentUser()

	const [formData, setFormData] = useState<createAdventureFormData>({
		title: '',
		description: '',
		galleryImage: '',
		categories: [],
		// location: '',
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

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const { title, description, galleryImage, categories, location } = formData

		if (!title || !description || !galleryImage || !categories || !location) {
			toast.error('Por favor, complete todos los campos')
			return
		}

		const data = new FormData()
		data.append('title', title)
		data.append('description', description)
		// data.append('location', location)

		for (let i = 0; i < formData.galleryImage.length; i++) {
			data.append('galleryImage', formData.galleryImage[i])
		}

		formData.categories.forEach((category) => {
			data.append('categories', category)
		})

		try {
			dispatch(createAdventure(formData, currentUserId))
			setFormData({
				title: '',
				description: '',
				galleryImage: '',
				categories: [],
				// location: '',
			})

			// await setTimeout(() => {
			// 	window.location.reload()
			// }, 1000)
			console.log(formData)
		} catch (error) {
			console.log('Error al enviar el formulario:', error)
		}
	}

	return (
		<Container>
			<div className='flex flex-col md:items-center xl:items-start pt-14'>
				<h2 className='text-[32px] font-medium'>Add adventure</h2>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center justify-center w-full transition'
				>
					{/* IMAGE */}
					<div className='mx-auto py-5 xl:py-8 w-full xl:w-4/5 2xl:w-5/6'>
						<CloudinaryUploadImg onUpload={handleUpload} />
					</div>

					{/* FORM */}
					<div className='w-full xl:w-4/5 2xl:w-5/6 flex items-center justify-center md:gap-10 py-5 xl:py-8'>
						<AdventureForm handleChange={handleChange} form={formData} />
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
						<div className='flex md:hidden flex-col items-center py-10'>
							<Map w={300} h={250} />
						</div>
						<div className='hidden md:flex lg:hidden flex-col items-center py-10'>
							<Map w={450} h={350} />
						</div>
						<div className='hidden lg:flex xl:hidden flex-col items-center py-10'>
							<Map w={650} h={400} />
						</div>
						<div className='hidden xl:flex 2xl:hidden flex-col items-center py-10'>
							<Map w={800} h={450} />
						</div>
						<div className='hidden 2xl:flex flex-col items-center py-10'>
							<Map />
						</div>
					</div>

					{/* BUTTONS */}
					<div className='flex flex-col lg:flex-row items-center justify-evenly gap-4 lg:gap-20 mx-auto py-10 w-full'>
						<div className='w-full lg:w-2/5 xl:w-2/6'>
							<Button label='Back' card outline onClick={() => navigate('/admindash')} />
						</div>
						<div className='w-full lg:w-2/5 xl:w-2/6'>
							<Button label='Create' card type='submit' />
						</div>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default AddAdventure
