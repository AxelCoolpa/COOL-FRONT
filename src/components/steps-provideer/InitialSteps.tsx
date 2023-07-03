import React, { useState, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFIve';
import GreenSidebar from '../SideProvider/GreenSidebar';
import StepSidebar from '../SideProvider/StepSidebar';


interface FormProvider {
  companyName: string,
  companyAddress: string,
  companyPhone: string,
  companyEmail: string,
  companyRepresentative: string,
  relatedChannel:string,
  descriptionBusiness:string,
  isRegistered:boolean,
  
}

export type StepProps = {
  next?: () => void;
  previous?: () => void;
  skip?: ()=> void
  handleStepClick?: (index: number)=> void
  formData: FormProvider
  handleSetForm:(form: FormProvider)=> void
};



const StepByStepComponent: React.FC = () => {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState<FormProvider>({
    companyName:"",
   companyAddress:"",
   companyPhone:"",
   companyEmail: "",
   companyRepresentative:"",
   relatedChannel:"",
   descriptionBusiness:"",
   isRegistered:false,
  });
  
  
  //const [stepComponent, setStepComponent] = useState<React.ComponentType<StepProps> | null>(null);

  // useEffect(() => {
  //   const loadStepComponent = async () => {
  //     let component: { default: React.ComponentType<StepProps> };
  //     switch (step) {
  //       case 1:
  //         component = await import('./StepOne');
  //         break;
  //       case 2:
  //         component = await import('./StepTwo');
  //         break;
  //       case 3:
  //         component = await import('./StepThree');
  //         break;
  //       default:
  //         // Componente de paso predeterminado o lógica de manejo de error
  //         break;
  //     }
  //     setStepComponent(() => component.default);
  //   };

  //   loadStepComponent();
  // }, [step]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSkip =() => {
    setStep(1)
    setForm({companyName:"",
    companyAddress:"",
    companyPhone:"",
    companyEmail: "",
    companyRepresentative:"",
    relatedChannel:"",
    descriptionBusiness:"",
    isRegistered:false})
  }
  
  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

const handleSetForm = (form: FormProvider) => {
  setForm(form);
}

  return (
    <>
    { step <= 2 &&<GreenSidebar step={step}/>}
    {step >=3 && <StepSidebar handleStepClick={handleStepClick} currentStep={currentStep}/>}
    <div className="w-2/3 mx-auto mt-6 ">
     
      {
       step === 1 && <StepOne handleSetForm={handleSetForm} next={handleNext} formData={form}/>
      }
      {
       step === 2 && <StepTwo handleSetForm={handleSetForm} formData={form} next={handleNext} previous={handlePrevious}/>
      }
      {
       step === 3 && <StepThree handleSetForm={handleSetForm} formData={form} next={handleNext} previous={handlePrevious} handleStepClick={handleStepClick}/>
      }
      {
       step === 4 && <StepFour handleSetForm={handleSetForm}  formData={form} next={handleNext} previous={handlePrevious} handleStepClick={handleStepClick}/>
      }
      {
       step === 5 && <StepFive handleSetForm={handleSetForm} formData={form} next={handleNext} previous={handlePrevious} skip={handleSkip} handleStepClick={handleStepClick}/>
      }
     
    </div>
    </>
  );
};

export default StepByStepComponent;
