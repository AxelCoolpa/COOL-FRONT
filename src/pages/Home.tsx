import React from 'react'
import SideBar from '../components/SideBar'
import HeaderSection from '../components/sections/HeaderSection'

const Home = () => {
	return (
		<div>
			<SideBar />
			<div className='flex flex-col items-end w-full pt-5 xl:px-6 2xl:pr-40 gap-20'>
				<HeaderSection />
			</div>
		</div>
	)
}

export default Home
