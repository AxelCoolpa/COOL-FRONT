import { useEffect, useState } from 'react'
import { StepProps } from './InitialSteps'

const StepFour: React.FC<StepProps> = ({next , previous , handleStepClick}) => {

    const handleNext = () => {
        next && next()
     handleStepClick && handleStepClick(3)
      }
      const handlePrevious = () => {
         previous && previous()
         handleStepClick && handleStepClick(1)
      }
    return (
        <>
            <nav className="flex justify-end items-center mb-8 ">
                <span className="text-gray-600 ">
                    Having trouble?
                    <a href="#" className="text-orange-600 no-underline font-bold pl-2">Get help</a>
                </span>
            </nav>
            <div className=" p-2 ">
                <h1 className='font-bold text-lg '>Business Details</h1>
                <span className="block mb-4">Details about you business corporation and shares</span>
                <div className='w-1/2'>
                    <form>
                        <div className="mb-4">
                            <select className="w-full border border-gray-400 rounded p-2 mb-6">
                                {/* Opciones del select */}
                            </select>
                            <div className="flex mb-4">
                            <input className="w-[50%] border border-gray-400 rounded p-2 mb-3 mr-2 " type="text" placeholder="Number of shares" />
                            <input className="w-[50%] border border-gray-400 rounded p-2 mb-3 " type="text" placeholder="$ per value" />
                            </div>
                        </div>
                        <div className="flex mb-6">
                            <input className="w-[70%] border border-gray-400 rounded p-2 mr-2" type="text" placeholder="Company name" />
                            <select className="w-[30%] border border-gray-400 rounded p-2" >
                                {/* Opciones del select */}
                            </select>
                        </div>
                        <textarea className="w-full border border-gray-400 rounded p-2 mb-4 h-[120px]" placeholder="Business description..."></textarea>
                    </form>
                </div>
            </div>
            <div className='flex justify-between ml-6 mt-8 w-[300px]'>
                <button className='bg-white text-black px-6 border rounded-[5px] h-[40px]' onClick={handlePrevious}>Previous</button>
                <button className='bg-OrangeCooL text-white px-6 border  rounded-[5px] h-[40px]' onClick={handleNext}>Next</button>
            </div>
        </>
    )
}
export default StepFour