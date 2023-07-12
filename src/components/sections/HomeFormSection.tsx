import React from 'react'
import BackgroundImg from '../../assets/playagreed.png'
import BackgroundWhite from '../../assets/whitegrid.png'
import LoginImage from '../../assets/loginimage.svg'
import LoginPexels from '../../assets/lagopexels.jpg'

interface Props {
	children: React.ReactNode
}

const HomeFormSection: React.FC<Props> = ({ children }) => {
	return (
		<div className='grid grid-cols-2'>
			<section className='col-span-1 flex justify-center left-2'>
				<div
					style={{ backgroundImage: `url(${LoginImage})` }}
					className=' bg-center bg-cover h-[110vh] w-[75%] items-center absolute z-10 left-20 k'
				/>
				<div id='form' className=' absolute w-full z-20'>
					{children}
				</div>
			</section>

			<section className='col-span-1 justify-end'>
				<div className='w-[90%] absolute justify-end mr-0'>
					<div
						style={{ backgroundImage: `url(${LoginPexels})` }}
						className='bg-center h-[110vh] absolute mr-0 w-[60%] bg-cover bg-no-repeat -z-50'
					/>
				</div>
			</section>
		</div>
	)
}

export default HomeFormSection
