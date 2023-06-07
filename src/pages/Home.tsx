import React from 'react'
import SideBar from '../components/SideBar'
import HeaderSection from '../components/sections/HeaderSection'

const Home = () => {
	return (
		<div>
			<SideBar />
			<div className='flex flex-col items-end xl:items-center w-full p-5 md:pl-[220px] xl:pl-[270px] gap-20'>
				<HeaderSection />
				<div className='w-full bg-black h-[200px]'></div>
			</div>
		</div>
	)
}

export default Home
