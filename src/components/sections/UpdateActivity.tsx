/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { toast } from 'react-hot-toast'

import { CgInfo } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { useMaps } from '../../hooks/useMaps'
import { useCurrentUser } from '../../hooks/useCurrentUser'

import { categories } from '../categories/categories'

import { activityById, selectActivityById } from '../../features/activityByIdSlice'
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
import Input from '../inputs/Input'
import Dropdown from '../dropdown'

const UpdateActivity = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { id } = useParams()
	const activityID = id

	const { currentUserId } = useCurrentUser()

	const activity = useSelector(selectActivityById)

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
			toast.error('Please complete all fields')
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
				title: activity?.title,
				description: activity?.description,
				location: activity?.location,
				galleryImage: activity?.galleryImage,
				videoLink: activity?.videoLink,
				category: activity?.category,
				individualPrice: activity?.individualPrice,
				groupPrice: activity?.groupPrice,
				starterPack: activity?.starterPack,
				startTime: activity?.startTime,
				endTime: activity?.endTime,
			})
			setCheckboxValues(activity?.category)
			setSearchValue(activity?.location)
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
													If you want to update any current field of the activity click
													the above button to load the information.
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

					{/* FORM */}
					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Activity Info
					</h3>

					<div className='w-full xl:w-4/5 2xl:w-5/6 flex items-center justify-center md:gap-10 py-5 xl:py-8'>
						<ActivityForm handleChange={handleChange} updateForm={formData} />
					</div>

					{/* CATEGORIES */}
					<h3 className='text-2xl font-semibold mx-auto py-5 xl:py-8 xl:w-4/5 2xl:w-5/6'>
						Activity Category
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
									checked={checkboxValues}
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
