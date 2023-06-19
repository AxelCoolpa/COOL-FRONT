import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { categories } from '../categories/categories'
import {
	createAdventure,
	createAdventureFormData,
} from '../../features/createAdventureSlice'

import AddAdventureForm from '../AddAdventureForm'
import Map from '../Map'
import Button from '../buttons/Button'
import CategoryInput from '../inputs/CategoryInput'
import ImageUpload from '../inputs/ImageUpload'
import ProviderCard from '../listings/ProviderCard'

const AddAdventure = () => {
	const dispatch = useDispatch()

	const [checkboxValues, setCheckboxValues] = useState([])

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked

		if (isChecked) {
			// Si el checkbox se ha marcado, añadir el valor al array
			setCheckboxValues([...checkboxValues, value])
		} else {
			// Si el checkbox se ha desmarcado, quitar el valor del array
			setCheckboxValues(checkboxValues.filter((val) => val !== value))
		}
	}

	const [formData, setFormData] = useState<createAdventureFormData>({
		title: '',
		description: '',
		individualPrice: '',
		groupPrice: '',
		gallery: [''],
		categories: [''],
		location: '',
		extras: {
			activities: '',
			starterPack: '',
			startTime: '',
			endTime: '',
		},
		rating: [0],
		reviews: [''],
	})

	formData.categories = checkboxValues

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const { title, description, individualPrice, groupPrice } = formData

		// Validar los campos del formulario antes de enviarlos al servidor
		if (!title || !description || !individualPrice || !groupPrice) {
			console.log('Por favor, complete todos los campos')
			console.log({
				title,
				description,
				individualPrice,
				groupPrice,
			})
			return
		}

		dispatch(createAdventure(formData))
		setFormData({
			title: '',
			description: '',
			individualPrice: '',
			groupPrice: '',
			categories: [''],
		})
		console.log(formData)
	}

	return (
		<div>
			<h2 className='text-[32px] font-medium'>Add adventure</h2>
			<div className='py-5'>
				<ImageUpload value='' />
			</div>
			<div className='grid grid-cols-1 xl:grid-cols-7 md:gap-10 pt-16'>
				<AddAdventureForm handleChange={handleChange} form={formData} />
				<div className='xl:col-span-2'>
					<ProviderCard />
				</div>
			</div>

			<h3 className='text-2xl font-semibold py-8'>Category adventure</h3>

			<div className='grid grid-cols-1 xl:grid-cols-7 md:gap-10 pb-14'>
				<div className='flex flex-wrap col-span-5 gap-10 xl:gap-10 2xl:gap-20'>
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
						<Button label='Ready' card onClick={handleSubmit} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddAdventure
