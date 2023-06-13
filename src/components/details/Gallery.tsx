import React, { useState } from 'react'

import { EnumData } from '../../types'

import GalleryModal from '../modals/GalleryModal'
import useGalleryModal from '../../hooks/useGalleryModal'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface GalleryProps {
	listing: EnumData | undefined
}

const Gallery: React.FC<GalleryProps> = ({ listing }) => {
	const galleryModal = useGalleryModal()

	return (
		<div className='flex flex-col gap-10'>
			<h3 className='text-3xl font-bold'>Gallery Photo</h3>
			<div className='flex flex-col items-center lg:flex-row gap-10 lg:gap-24'>
				<div className='flex gap-10'>
					<img
						src={listing?.galleryPhoto[0]}
						className='rounded-[20px] object-cover w-44 h-44'
					/>
					<img
						src={listing?.galleryPhoto[1]}
						className='rounded-[20px] object-cover w-44 h-44'
					/>
				</div>
				<div onClick={galleryModal.onOpen} className='relative w-56 h-44 cursor-pointer'>
					<img
						src={listing?.galleryPhoto[2]}
						className='rounded-[20px] object-cover w-56 h-44'
					/>
					<div className='absolute top-0 flex items-center justify-center w-full bg-black/40 rounded-[20px] h-full'>
						<span className='text-white font-bold text-3xl'>
							+{listing?.galleryPhoto.length}
						</span>
					</div>
				</div>
				<GalleryModal gallery={listing?.galleryPhoto} />
			</div>
		</div>
	)
}

export default Gallery
