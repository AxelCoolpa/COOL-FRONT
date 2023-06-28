import { useState } from 'react';
import { FaCompass, FaArrowRight, FaCity } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";

const StepTwo = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [checkboxValues, setCheckboxValues] = useState<string[]>([])

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const isCheck = e.target.checked
    console.log(isCheck)
    setIsChecked(isCheck)
    if (isChecked) {

      setCheckboxValues([...checkboxValues, value])
    } else {
      setCheckboxValues(checkboxValues.filter((val) => val !== value))
    }
  }

  return (
    <div>
      <nav className="flex justify-end items-center mb-8 ">
        <span className="text-gray-600 ">
          Having trouble?
          <a href="#" className="text-OrangeCooL no-underline font-bold pl-2">Get help</a>
        </span>
      </nav>
      <header className="flex flex-col items-start mt-1 mb-1">
        <h1 className='font-bold text-lg ' >Select travel channel</h1>
        <span>Select which category your company enters</span>
      </header>
      <ul>
        <li>
          <input
            id="checkbox1"
            type="checkbox"
            className="opacity-0 peer"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="checkbox1"
            className={`flex flex-row items-center gap-3 w-[350px] h-[80px] p-5 border ${isChecked ? 'border-OrangeCooL border-1 shadow-xl shadow-black/20 rounded-[10px]' : 'border-[#F3F3F3]  rounded-[10px] cursor-pointer'
              }`}
          >
            <div className="text-lg">
              <FaCompass
                size={30}
                className={isChecked ? 'text-OrangeCooL' : 'text-[#909090]'}
              />
            </div>
            <div className="font-semibold text-sm pl-2">
              <span className="block ">Travel agency or experience</span>
              <span className='text-[#909090]'>Owned by individuals</span>
            </div>
            <div className="flex-grow"></div>
            {isChecked && (<FaArrowRight className='text-[#909090]' />)}
          </label>
        </li>
        <li>
          <input
            id="checkbox2"
            type="checkbox"
            className="opacity-0 peer"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="checkbox2"
            className={`flex flex-row items-center gap-3 w-[350px] h-[80px] p-5 border ${isChecked ? 'border-OrangeCooL border-1 shadow-xl shadow-black/20 rounded-[10px]' : 'border-[#F3F3F3]  rounded-[10px] cursor-pointer'
              }`}
          >
            <div className="text-lg">
              <FaCity
                size={36}
                className={isChecked ? 'text-OrangeCooL' : 'text-[#909090]'}
              />
            </div>
            <div className="font-semibold text-sm pl-2">
              <span className="block ">Acommodation</span>
              <span className='text-[#909090]'>Owned by Stakeholders</span>
            </div>
            <div className="flex-grow"></div>
            {isChecked && (<FaArrowRight className='text-[#909090]' />)}
          </label>
        </li>
        <li>
          <input
            id="checkbox3"
            type="checkbox"
            className="opacity-0 peer"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="checkbox3"
            className={`flex flex-row items-center gap-3 w-[350px] h-[80px] p-5 border ${isChecked ? 'border-OrangeCooL border-1 shadow-xl shadow-black/20 rounded-[10px]' : 'border-[#F3F3F3]  rounded-[10px] cursor-pointer'
              }`}
          >
            <div className="text-lg">
              <IoCarSportSharp
                size={36}
                className={isChecked ? 'text-OrangeCooL' : 'text-[#909090]'}
              />
            </div>
            <div className="font-semibold text-sm pl-2">
              <span className="block ">Logistics and transport travels</span>
              <span className='text-[#909090]'>Owned by Stakeholders</span>
            </div>
            <div className="flex-grow"></div>
            {isChecked && (<FaArrowRight className='text-[#909090]' />)}
          </label>
        </li>
      </ul>
      <div className='flex justify-between ml-6 mt-24 w-[300px]'>
        <button className='bg-white text-black px-6 border rounded-[5px] h-[40px]'>Previous</button>
        <button className='bg-OrangeCooL text-white px-6 border  rounded-[5px] h-[40px]'>Next</button>
      </div>
    </div>
  )
}

export default StepTwo