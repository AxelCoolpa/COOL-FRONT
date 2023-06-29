import React, { useState } from 'react'
import { MdSearch } from "react-icons/md";
import { StepProps } from './InitialSteps'; 

const StepThree: React.FC<StepProps> = ({handleStepClick ,next , previous}) => {
  const [searchValue, setSearchValue] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  const handleSearch = (e :React.FormEvent) => {
    e.preventDefault()
    // Genera la URL de búsqueda del mapa utilizando el valor del input de búsqueda
    const url = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(searchValue)}&key=TU_API_KEY`;
    setMapUrl(url);
  }
  const handleNext = () => {
    next && next()
    handleStepClick && handleStepClick(2)
  }
  const handlePrevious = () => {
     previous && previous()
     handleStepClick && handleStepClick(1)
  }
  return (
    <div className="relative h-[100vh]  right-[130px] top-[-50px] " >
      <div className="absolute top-[320px] w-[300px] left-[70px] right-0 z-10 ">
      <nav className="relative top-[-220px] left-[700px]">
                <span className="text-gray-600 ">
                    Having trouble?
                    <a href="#" className="text-orange-600 no-underline font-bold pl-2">Get help</a>
                </span>
            </nav>
        <div className="relative inline-block">
        <form onSubmit={handleSearch}>
      <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <MdSearch  />
      </span>
      <input
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className="pl-8 py-2 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      </form>
    </div>

      </div>
      <div className="absolute top-[230px] left-16 right-0 z-10 p-2 text-OrangeCooL  w-[270px]">
        <h1 className='text-xl'>Location of your company</h1>
        <span className='block text-[11px]'>Select the state in which you want to incorporate you new company</span>
      </div>
      <div className="absolute top-0 left-1 h-[110vh] w-[74vw]" >
        <iframe
          title="Google Maps"
          src={mapUrl.length ? mapUrl : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17090799.40050517!2d-82.28714719430437!3d8.55800738490379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa61583c8be2be3%3A0x79eee04d1fa59bcf!2zUGFuYW3DoQ!5e0!3m2!1ses!2sco!4v1686660412555!5m2!1ses!2sco`}
          style={{ border: 0 }}
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-16 left-8 right-0 z-10 p-2 flex justify-between ml-6 mt-24 w-[300px]">
        <button className='bg-white text-black px-6 border rounded-[5px] h-[40px]' onClick={handlePrevious}>Previous</button>
        <button className='bg-OrangeCooL text-white px-6 border  rounded-[5px] h-[40px]'onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default StepThree