import {  useState } from 'react'
import { StepProps } from './InitialSteps'

interface DetailBusiness {
   service: string
    companyName: string
   description:string
  
}

const StepFour: React.FC<StepProps> = ({next , previous , handleStepClick ,formData}) => {
    const [formBusiness , setFormBusiness] = useState<DetailBusiness>({
        service: "",
        companyName: "",
        description:"",
       
    })

  let services : string[] = []

  if(formData.relatedChannel === "Travel"){
    services = ["tours" ,"place of activity" ,"tour guide","night activity","eco tourism","agro tourism" ,"tourist attraction" ,"experience"] 
  }
  else if(formData.relatedChannel === "Accomodation"){
    services =["hotel","cottage" ,"resort" ,"camping area" ,"house"]
  }
  else if(formData.relatedChannel === "Logistics"){
     services = ["urban transport","yacht","cruise","ferri","airline"]
  }
    const handleNext = () => {

        if(formBusiness.companyName && formBusiness.description  && formBusiness.service  ){
             formData.descriptionBusiness = formBusiness.description
             formData.companyName = formBusiness.companyName
             formData.serviceType = formBusiness.service
            next && next()
         handleStepClick && handleStepClick(3)
           console.log(formBusiness)
        }
        else {
            alert("Missing fields to complete")
        }
      }
      const handlePrevious = () => {
        setFormBusiness({
        service: "",
       companyName: "",
        description:"",
       })
         previous && previous()
         handleStepClick && handleStepClick(1)
      }

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
     setFormBusiness((prevFormData) => ({
              ...prevFormData,
              [name]: value,
            }));
        
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
                       <div className="mb-3">
                            <select className="w-full border border-gray-400 rounded p-2 mb-4" value={formBusiness.service} name="service" onChange={handleSelect}>
                                <option value="">Type of service</option>
                                {
                                 services.map((service,i) => 
                                    <option key={i} value={service} >{service}</option>
                                 )
                                }
                                {/* Opciones del select */}
                            </select>
                            
                        </div>
                        <div className="flex mb-6">
                            <input className="w-full border border-gray-400 rounded p-2 " value={formBusiness.companyName} name="companyName" type="text" placeholder="Company name" onChange={handleChange}/>
                           
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