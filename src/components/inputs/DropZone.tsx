import React, { useState } from 'react'

import { useDropzone } from 'react-dropzone'

import { TbPhotoPlus } from 'react-icons/tb'

interface DropZoneProps {
	onFilesSelected: (files: File[]) => void
	text?: string
}

const DropZone: React.FC<DropZoneProps> = ({ onFilesSelected, text }) => {
	const [files, setFiles] = useState<File[]>([])

	const handleDrop = (acceptedFiles: File[]) => {
		setFiles((prevFiles) => [...prevFiles, ...acceptedFiles])
		onFilesSelected(acceptedFiles)
	}

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: handleDrop,
	})

	return (
		<div
			{...getRootProps()}
			className='relative flex flex-col justify-center items-center cursor-pointer hover:opacity-70 transition border-dashed border-2 px-24 py-10 min-[1440px]:py-24 border-neutral-400 gap-4 text-neutral-600 rounded-lg font-bold text-lg'
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Suelta los archivos aquí...</p>
			) : (
				<>
					<TbPhotoPlus size={54} />
					<p className='text-xs lg:text-sm min-[1440px]:text-base'>
						{text || 'Drag and drop files here, or click to select files'}
					</p>
				</>
			)}

			{files.length > 0 && (
				<>
					<h4>Selected files:</h4>
					<div className='flex gap-2'>
						{files.map((file, index) => (
							<div key={index}>
								<img
									src={URL.createObjectURL(file)}
									alt={file.name}
									className='w-52 h-32 object-cover rounded-2xl '
								/>
								<p className='text-xs font-medium text-center'>{file.name}</p>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default DropZone
