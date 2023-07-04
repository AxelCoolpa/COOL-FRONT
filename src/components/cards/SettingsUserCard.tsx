import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectUserById } from '../../features/userByIdSlice'
import { updateUser, updateUserFormData } from '../../features/updateUserSlice'

import { LuSave } from 'react-icons/lu'
import DropZone from '../inputs/DropZone'

const SettingsUserCard = () => {
	const dispatch = useDispatch()

	const { id } = useParams()
	const userID = id

	const user = useSelector(selectUserById)

	const [formData, setFormData] = useState<updateUserFormData>({
		username: user?.username,
		email: user?.email,
		avatar: user?.avatar,
		firstName: user?.firstName,
		lastname: user?.lastname,
		DNI: user?.DNI,
		phone: user?.phone,
		location: user?.location,
		// city: user?.city,
		// address: user?.address,
		description: user?.description,
	})
	console.log(formData)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}))
	}

	const handleFilesSelected = (file: File[]) => {
		const updatedAvatar = [...formData.avatar, ...file]
		setFormData((prevFormData) => ({
			...prevFormData,
			avatar: updatedAvatar,
		}))
	}

	const handleUpdate = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			dispatch(updateUser(formData, userID))
			console.log(formData)
		} catch (error) {
			console.log('Error al enviar el formulario:', error)
		}
	}

	return (
		<>
			<div className='relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0'>
				<div className='rounded-t bg-white mb-0 px-6 py-6'>
					<div className='text-center flex justify-between'>
						<h6 className='text-blueGray-700 text-xl font-bold'>My account</h6>
					</div>
				</div>
				<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
					<form onSubmit={handleUpdate}>
						<h6 className='text-sm mt-3 mb-6 font-bold uppercase'>User Information</h6>
						<div className='flex flex-wrap'>
							{/* USERNAME */}
							<div className='w-full lg:w-6/12 p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Username
									</label>
									<input
										className='border-0 px-3 py-3  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
										id='username'
										name='username'
										value={formData?.username}
										onChange={handleChange}
										placeholder={user?.username}
									/>
								</div>
							</div>
							{/* EMAIL */}
							<div className='w-full lg:w-6/12 p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Email address
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 placeholder:text-black'
										placeholder={user?.email}
										readOnly
										value={user.email}
										onChange={handleChange}
									/>
								</div>
							</div>
							{/* FIRSTNAME */}
							<div className='w-full lg:w-6/12 p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										First Name
									</label>
									<input
										id='firstName'
										name='firstName'
										className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
										placeholder={user?.firstName || 'First Name'}
										value={formData?.firstName}
										onChange={handleChange}
									/>
								</div>
							</div>
							{/* LASTNAME */}
							<div className='w-full lg:w-6/12 p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Last Name
									</label>
									<input
										id='lastname'
										name='lastname'
										className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
										placeholder={user?.lastname || 'Last Name'}
										value={formData?.lastname}
										onChange={handleChange}
									/>
								</div>
							</div>
							{/* AVATAR */}
							<div className='w-full p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Profile Image
									</label>

									<DropZone
										onFilesSelected={handleFilesSelected}
										text='Drag & drop the file here, or click to select the file'
									/>
								</div>
							</div>
						</div>

						<hr className='my-6 border-b-1 border-blueGray-300' />

						<h6 className='text-blueGray-400 text-sm mt-6 mb-6 font-bold uppercase'>
							Contact Information
						</h6>
						<div className='flex flex-wrap'>
							{/* PHONE */}
							<div className='w-full lg:w-6/12 p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Phone
									</label>
									<input
										id='phone'
										name='phone'
										className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
										placeholder={user?.phone || '+12 365 478 9000'}
										value={formData?.phone}
										onChange={handleChange}
									/>
								</div>
							</div>
							{/* DNI */}
							<div className='w-full lg:w-6/12 p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										DNI
									</label>
									<input
										id='DNI'
										name='DNI'
										className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
										placeholder={user?.DNI || '12345678'}
										value={formData?.DNI}
										onChange={handleChange}
									/>
								</div>
							</div>
							{/* ADDRESS */}
							{/* <div className='w-full p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Address
									</label>
									<input
										id='address'
										name='address'
										className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
										placeholder={
											user?.address || 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09'
										}
										onChange={handleChange}
									/>
								</div>
							</div> */}
							{/* COUNTRY */}
							<div className='w-full lg:w-4/12 p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Country
									</label>
									<input
										id='location'
										name='location'
										className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
										placeholder={user?.location || 'United States'}
										value={formData.location}
										onChange={handleChange}
									/>
								</div>
							</div>
							{/* CITY */}
							{/* <div className='w-full lg:w-4/12 p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										City
									</label>
									<input
										id='city'
										name='city'
										className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
										placeholder={user?.city || 'New York'}
										value={formData?.city}
										onChange={handleChange}
									/>
								</div>
							</div> */}
						</div>

						<hr className='mt-6 border-b-1 border-blueGray-300' />

						<h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
							About Me
						</h6>
						{/* DESCRIPTION */}
						<div className='flex flex-wrap'>
							<div className='w-full lg:w-12/12 p-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										About me
									</label>
									<input
										id='description'
										name='description'
										className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
										placeholder={user?.description || 'Tell us about yourself'}
										value={formData.description}
										onChange={handleChange}
									></input>
								</div>
							</div>
						</div>
						<div className='flex justify-end mt-6'>
							<button
								type='submit'
								className='flex items-center gap-1 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
							>
								<LuSave size={18} />
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default SettingsUserCard
