import React, { useState } from 'react'
import Map from '../Map'
import Input from '../inputs/Input';
import { MdSearch } from "react-icons/md";


const StepThree = () => {
  const [searchValue, setSearchValue] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  const handleSearch = () => {
    // Genera la URL de búsqueda del mapa utilizando el valor del input de búsqueda
    const url = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(searchValue)}&key=TU_API_KEY`;
    setMapUrl(url);
  }
  return (
    <div className="relative h-screen  right-[130px] top-[-50px] ">
      <div className="absolute top-[300px] w-[300px] left-[70px] right-0 z-10 ">
        <Input
          type="text"
          value={searchValue}
          handleChange={e => setSearchValue(e.target.value)}
          icon={MdSearch}
          sizeH={2}
        />

      </div>
      <div className="absolute top-[200px] left-16 right-0 z-10 p-2 text-OrangeCooL  w-[270px]">
        <h1 className='text-xl'>Location of your company</h1>
        <span className='block text-[11px]'>Select the state in which you want to incorporate you new company</span>
      </div>
      <div className="absolute top-0 left-1 h-screen w-[1000px]">
        <iframe
          title="Google Maps"
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17090799.40050517!2d-82.28714719430437!3d8.55800738490379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa61583c8be2be3%3A0x79eee04d1fa59bcf!2zUGFuYW3DoQ!5e0!3m2!1ses!2sco!4v1686660412555!5m2!1ses!2sco'
          style={{ border: 0 }}
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-16 left-2 right-0 z-10 p-2 flex justify-between ml-6 mt-24 w-[300px]">
        <button className='bg-white text-black px-6 border rounded-[5px] h-[40px]'>Previous</button>
        <button className='bg-OrangeCooL text-white px-6 border  rounded-[5px] h-[40px]'>Next</button>
      </div>
    </div>
  )
}

export default StepThree