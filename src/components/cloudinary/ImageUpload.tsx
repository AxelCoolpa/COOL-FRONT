import { useEffect, useState } from 'react'
import axios from 'axios'
import { TbPhotoPlus } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'

interface CloudinaryUploadProps {
	onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
	img?: string
}

const CloudinaryUploadImg: React.FC<CloudinaryUploadProps> = ({ onUpload, img }) => {
	const [imageSelected, setImageSelected] = useState('')
	const [image, setImage] = useState('')

	const uploadImage = () => {
		const formData = new FormData()
		formData.append('file', imageSelected)
		formData.append('upload_preset', 'gp0cjncm')

		axios
			.post('https://api.cloudinary.com/v1_1/dpxucxgwg/image/upload', formData)
			.then((response) => setImage(response.data.secure_url))
	}

	const handleClearImg = () => {
		setImage('')
	}

	useEffect(() => {
		if (image) {
			onUpload(image)
		}
	}, [image])

	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<label
				htmlFor='dropzone-file'
				className='relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer border-neutral-400 gap-4 text-neutral-600'
			>
				<div className='relative flex flex-col items-center justify-center w-full h-64 pt-5 pb-6 text-gray-500'>
					<TbPhotoPlus size={54} />
					{image ||
						(img && (
							<div className='absolute inset-0 flex items-center justify-center'>
								<button
									onClick={handleClearImg}
									className='m-2 border-0 hover:opacity-70 transition absolute right-2 top-0 bg-white/60 text-black rounded-full z-10'
								>
									<IoMdClose size={30} />
								</button>
								<img
									alt='Upload'
									src={image || img}
									className='rounded-lg object-cover h-[252px] w-full'
								/>
							</div>
						))}
					<p className='my-2 text-sm text-gray-500 dark:text-gray-400'>
						<span className='font-semibold'>Click to select image</span>
					</p>
					<p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF</p>
				</div>
				<input
					id='dropzone-file'
					type='file'
					className='hidden'
					onChange={(e) => {
						setImageSelected(e.target.files[0])
					}}
					multiple
				/>
				<button
					type='button'
					className='absolute bottom-0 right-0 ml-6 my-2 lighter-blue mr-4 py-2 px-4 rounded-xl bg-OrangeCooL border-0 text-lg text-white font-semibold h-fit shadow-CooL'
					onClick={uploadImage}
				>
					Click to upload
				</button>
			</label>
		</div>
	)
}

export default CloudinaryUploadImg
