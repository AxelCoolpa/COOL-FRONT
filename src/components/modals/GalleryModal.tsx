import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

import Modal from './Modal'
import useGalleryModal from '../../hooks/useGalleryModal'

import '../../styles/Global.css'

interface GalleryModalProps {
	gallery: Array<string> | undefined
}

const GalleryModal: React.FC<GalleryModalProps> = ({ gallery }) => {
	const galleryModal = useGalleryModal()

	const bodyContent = (
		<div className='flex flex-col justify-center items-center'>
			<div className='w-full'>
				<Swiper
					loop={true}
					spaceBetween={10}
					navigation={true}
					modules={[Navigation, Thumbs]}
					grabCursor={true}
					className='product-images-slider'
				>
					{gallery?.map((img, index) => (
						<SwiperSlide key={index}>
							<img
								src={img}
								alt='Gallery'
								className='rounded-2xl object-cover w-full h-[700px]'
							/>
							<div className='flex items-center justify-center pt-5'>
								<span className='text-3xl font-bold'>
									{index + 1} / {gallery.length}
								</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)

	return (
		<Modal
			isOpen={galleryModal.isOpen}
			onClose={galleryModal.onClose}
			title='Gallery'
			body={bodyContent}
		/>
	)
}

export default GalleryModal
