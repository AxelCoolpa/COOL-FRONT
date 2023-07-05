import {useState} from 'react'
import logo from '../../assets/cool.png';
const steps = [
    "Company Type",
    "State",
    "Business Detail",
    "Team"
  ];

interface Steps {
    handleStepClick: (index:number) => void
    currentStep: number
}
const StepSidebar: React.FC<Steps>  = ({handleStepClick , currentStep}) => {
   
  
    return (
      <div className='flex '>
        <div  className="fixed  left-0 top-0 bg-[#f5f5f5] w-1/4 min-h-screen flex flex-col justify-between">
        <img src={logo} alt="LOGO-COOL" className="w-60 p-8" />
        <div className="p-1 mb-96">
      <nav className='ml-8'>
      <ul className='flex flex-col gap-4'>
      {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center ${
              index === currentStep ? "text-OrangeCooL" : ""
            }`}
            onClick={() => handleStepClick(index)}
          >
            <div className="flex items-center">
              {index < currentStep ? (
                <span className="w-6 h-6 rounded-full text-white bg-OrangeCooL mr-2 p-2 flex items-center justify-center">
                  &#10003;
                </span>
              ) : (
                <span className="w-6 h-6 rounded-full  p-2 border border-gray-200 flex items-center justify-center mr-2">
                  {index + 1}
                </span>
              )}
              {index !== steps.length - 1 && (
                <span className="border-r border-gray-500 mx-2"></span>
              )}
            </div>
            <span className={`${index === 3 ? "ml-4" : ""}`}>{step}</span>
          </li>
        ))}
      </ul>
      </nav>
      </div>
      </div>
      </div>
    );
}

export default StepSidebar