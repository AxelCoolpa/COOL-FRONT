//   Marto !
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
	selectDestinations,
	selectError,
	selectLoading,
} from '../../features/destinationSlice'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

import GridColumns from '../../components/sections/GridColumns'
import DestinationCard from '../../components/listings/DestinationCard'

const ShowAdventures: React.FC = () => {
	const destinations = useSelector(selectDestinations)
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)
	const navigate = useNavigate()

	if (loading) {
		return <div>Cargando destinos...</div>
	}
	if (error) {
		return <div>Error al cargar destinos: {error} </div>
	}

	const validDestinations = destinations.filter(
		(destination) => destination !== undefined && destination !== null
	)

	return (
		<>
			<div className='flex flex-wrap'>
				<div className='rounded-t bg-white mb-0 px-6 py-6'>
					<div className='text-center flex justify-between pt-3 mt-3 mb-3 pb-3'>
						<h6 className='text-gray-600 text-md uppercase font-bold'>
							Active adventures
						</h6>
						<button
							className='bg-red-500 text-white active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md mr-1 ease-linear transition-all duration-150'
							onClick={() => navigate('/admindash/create')}
						>
							Add Adventure
						</button>
					</div>

					<div className='flex-auto px-3 lg:px-0 py-10 pt-0'>
						<GridColumns>
							{validDestinations.map((destination) => (
								<DestinationCard key={destination._id} data={destination} />
							))}
						</GridColumns>
					</div>
				</div>

				<div className='rounded-t bg-white mb-0 px-6 py-6'>
					<div className='text-center flex justify-between pt-3 mt-3 mb-3 pb-3'>
						<h6 className='text-gray-600 text-md uppercase font-bold'>
							Inactive adventures
						</h6>
					</div>

					<div className='flex-auto px-3 lg:px-0 py-10 pt-0'>
						<GridColumns>
							{/* <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation, Thumbs]}
              grabCursor={true}
              className="product-images-slider"
            >
              <SwiperSlide> */}
							{validDestinations.map((destination) => (
								<DestinationCard key={destination._id} data={destination} />
							))}
							{/* </SwiperSlide>
            </Swiper> */}
						</GridColumns>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShowAdventures
