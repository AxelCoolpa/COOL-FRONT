import React from 'react'

import { TbPhotoPlus } from 'react-icons/tb'

interface ImageUploadProps {
	value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value }) => {
	return (
		<div
			onClick={() => alert('Image Upload')}
			className='relative flex flex-col justify-center items-center cursor-pointer hover:opacity-70 transition border-dashed border-2 p-24 border-neutral-400 gap-4 text-neutral-600 rounded-lg'
		>
			<TbPhotoPlus size={54} />
			<div className='font-bold text-lg'>Click to upload</div>
			{value && (
				<div className='absolute inset-0 w-full h-full'>
					<img src={value} alt='Upload' className='object-cover rounded-lg' />
				</div>
			)}
		</div>
	)
}

export default ImageUpload
