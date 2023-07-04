import { useEffect, useState } from 'react'
import axios from 'axios'
import { TbPhotoPlus } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'

{
	/* <CloudinaryUploadImg
	onUpload={handleUpload}
	name='picture'
	onClick={handleChange}
	className='pb-10'
/> */
}

interface CloudinaryUploadProps {
	onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
	name: string
	onClick: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CloudinaryUploadImg: React.FC<CloudinaryUploadProps> = ({ onUpload }) => {
	const [imageSelected, setImageSelected] = useState('')
	const [image, setImage] = useState('')

	console.log(image)

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
					{image && (
						<div className='absolute inset-0 flex items-center justify-center'>
							<button
								onClick={handleClearImg}
								className='m-2 border-0 hover:opacity-70 transition absolute right-2 top-0 bg-white/60 text-black rounded-full z-10'
							>
								<IoMdClose size={30} />
							</button>
							<img
								alt='Upload'
								src={image}
								className='rounded-lg object-cover h-[252px] w-full'
							/>
						</div>
					)}
					<p className='my-2 text-sm text-gray-500 dark:text-gray-400'>
						<span className='font-semibold'>Click to select</span> or drag and drop
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

/* <div className='flex'>
				<div className='flex'>
					<div className='shrink-0'>
						<label
							htmlFor='about'
							className='mt-2 ml-4 block text-sm font-medium leading-6 text-gray-900'
						>
							Foto seleccionada
							<img
								className='h-32 w-32 object-cover rounded-full'
								src={
									image
										? image
										: `https://res.cloudinary.com/dpxucxgwg/image/upload/v1679450694/anonimo_uim8xm.png`
								}
								alt='imagen cargada'
							/>
						</label>
					</div>
					<label className='block pl-6 py-11'>
						<span className='sr-only'>Selecciona una foto de perfil</span>
						<input
							type='file'
							className='block w-full text-lg text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-violet-50 file:lighter-blue hover:file:bg-violet-100'
							accept='.png, .jpg, .jpeg .webp .gif. .svg'
							name=''
							id=''
							onChange={(e) => {
								setImageSelected(e.target.files[0])
							}}
						/>
					</label>

					<button
						type='button'
						className='ml-6 my-11 lighter-blue mr-4 py-2 px-4 rounded-full border-0 text-lg font-semibold bg-violet-100 h-fit'
						onClick={uploadImage}
					>
						Cargar Imagen
					</button>
				</div>
			</div> */
