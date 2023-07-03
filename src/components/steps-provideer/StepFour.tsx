import {  useState } from 'react'
import { StepProps } from './InitialSteps'

interface DetailBusiness {
   service: string
   shares: string
   value: string
   companyName: string
   description:string
   inc: string
}

const StepFour: React.FC<StepProps> = ({next , previous , handleStepClick}) => {
    const [formBusiness , setFormBusiness] = useState<DetailBusiness>({
        service: "",
        shares: "",
        value: "",
        companyName: "",
        description:"",
        inc: "",
    })
    const handleNext = () => {

        if(formBusiness.companyName && formBusiness.description && formBusiness.shares && formBusiness.service && formBusiness.inc && formBusiness.inc ){

            next && next()
         handleStepClick && handleStepClick(3)
           console.log(formBusiness)
        }
        else {
            alert("Missing fields to complete")
        }
      }
      const handlePrevious = () => {
        setFormBusiness({service: "",
        shares: "",
        value: "",
        companyName: "",
        description:"",
        inc: "",})
         previous && previous()
         handleStepClick && handleStepClick(1)
      }

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if(name === "value" || name === "shares"){
        
            setFormBusiness((prevFormData) => ({
                    ...prevFormData,
                    [name]:/^[0-9]+$/.test(value) ? value : "",
                  }));
         }
        else{

            setFormBusiness((prevFormData) => ({
              ...prevFormData,
              [name]: value,
            }));
        }
      };

      const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
       if(e.target.value.length){
       const { name, value } = e.target;
        setFormBusiness((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
       }
      }

      const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormBusiness((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
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
                            <select className="w-full border border-gray-400 rounded p-2 mb-6" value={formBusiness.service} name="service" onChange={handleSelect}>
                                <option value="">Type of service</option>
                                <option value="uno">uno</option>
                                <option value="dos">dos</option>
                                <option value="tres">tres</option>
                                {/* Opciones del select */}
                            </select>
                            <div className="flex mb-4">
                            <input className="w-[50%] border border-gray-400 rounded p-2 mb-3 mr-2 " value={formBusiness.shares} name="shares" type="text" placeholder="Number of shares"  onChange={handleChange}/>
                            <input className="w-[50%] border border-gray-400 rounded p-2 mb-3 " value={formBusiness.value} name="value" type="text" placeholder="$ per value" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="flex mb-6">
                            <input className="w-[70%] border border-gray-400 rounded p-2 mr-2" value={formBusiness.companyName} name="companyName" type="text" placeholder="Company name" onChange={handleChange}/>
                            <select className="w-[30%] border border-gray-400 rounded p-2" value={formBusiness.inc} name="inc" onChange={handleSelect}>
                                <option value="">Inc.</option>
                                <option value="uno">uno</option>
                                <option value="dos">dos</option>
                                <option value="tres">tres</option>
                                {/* Opciones del select */}
                            </select>
                        </div>
                        <textarea className="w-full border border-gray-400 rounded p-2 mb-4 h-[120px]" value={formBusiness.description} name="description" placeholder="Business description..." onChange={handleTextArea}></textarea>
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