import axios from 'axios'
import { useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'

import { toast } from 'react-hot-toast'

import { FiSearch } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { useMaps } from '../../hooks/useMaps'
import usePackModal from '../../hooks/usePackModal'

import { categories } from '../categories/categories'
import { selectDestinations } from '../../features/destinationSlice'

import Modal from './Modal'
import Heading from '../Heading'
import CategoryInput from '../inputs/CategoryInput'
import DropZone from '../inputs/DropZone'
import Input from '../inputs/Input'
import Map from '../Map'
import SelectDestination from '../inputs/Select'
import { Destination } from '../sections/AddActivity'

// import { useRouter } from 'next/navigation'

enum STEPS {
	DESTINATION = 0,
	CATEGORY = 1,
	LOCATION = 2,
	IMAGES = 3,
	DESCRIPTION = 4,
	PRICE = 5,
}

const PackageModal = () => {
	// const router = useRouter()

	const packModal = usePackModal()

	const destinationsList = useSelector(selectDestinations)

	const [destinations, setDestinations] = useState<Destination[]>([])
	const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

	const [step, setStep] = useState(STEPS.DESTINATION)
	const [isLoading, setIsLoading] = useState(false)

	const [formData, setFormData] = useState({
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

	const onBack = () => {
		setStep((value) => value - 1)
	}

	const onNext = () => {
		setStep((value) => value + 1)
	}

	const onSubmit = () => {
		if (step !== STEPS.PRICE) {
			return onNext()
		}

		setIsLoading(true)

		axios
			.post('/api/listings', formData)
			.then(() => {
				toast.success('Listing Created!')
				// router.refresh()
				setStep(STEPS.DESTINATION)
				packModal.onClose()
			})
			.catch(() => {
				toast.error('Something went wrong')
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	const { handleSearch, mapUrl, searchValue, setSearchValue } = useMaps(formData)

	useEffect(() => {
		setDestinations(destinationsList)
	}, [destinationsList])

	const actionLabel = useMemo(() => {
		if (step === STEPS.PRICE) {
			return 'Create'
		}

		return 'Next'
	}, [step])

	const secondaryActionLabel = useMemo(() => {
		if (step === STEPS.DESTINATION) {
			return undefined
		}

		return 'Back'
	}, [step])

	const formatOptionLabel = (option: any) => (
		<div className='flex flex-row items-center gap-3'>
			<div>
				<span className='text-neutral-500'>{option.title}</span>
			</div>
		</div>
	)

	let bodyContent = (
		<div className='flex flex-col gap-8'>
			<Heading
				title='Where is your place located?'
				subtitle='Help guests find you!'
				center
			/>
			<SelectDestination
				options={destinations}
				value={selectedDestination}
				onChange={handleDestinationChange}
				formatOptionLabel={formatOptionLabel}
			/>
		</div>
	)

	if (step === STEPS.CATEGORY) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='Which of these best describes your place?'
					subtitle='Pick a category'
					center
				/>
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
								checked={checkboxValues}
							/>
						</ul>
					))}
				</div>
			</div>
		)
	}

	if (step === STEPS.LOCATION) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='Where is your place located?'
					subtitle='Help guests find you!'
					center
				/>
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
		)
	}

	if (step === STEPS.IMAGES) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='Add a photos of your place'
					subtitle='Show guests what your place looks like!'
					center
				/>
				<DropZone onFilesSelected={handleFilesSelected} />
			</div>
		)
	}

	if (step === STEPS.DESCRIPTION) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='How would you describe your place?'
					subtitle='Short and sweet works best!'
					center
				/>
			</div>
		)
	}

	if (step === STEPS.PRICE) {
		bodyContent = (
			<div className='flex flex-col gap-8'>
				<Heading
					title='How, set your price'
					subtitle='How much do you charge per night?'
					center
				/>
			</div>
		)
	}

	return (
		<Modal
			isOpen={packModal.isOpen}
			onClose={packModal.onClose}
			onSubmit={onSubmit}
			actionLabel={actionLabel}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.DESTINATION ? undefined : onBack}
			title='Create Package'
			body={bodyContent}
		/>
	)
}

export default PackageModal
