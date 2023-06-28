import React, { useState, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
type StepProps = {
  onNext: () => void;
  onPrevious: () => void;
};

const StepByStepComponent: React.FC = () => {
  const [step, setStep] = useState(1);
  const [stepComponent, setStepComponent] = useState<React.ComponentType<StepProps> | null>(null);

  useEffect(() => {
    const loadStepComponent = async () => {
      let component: { default: React.ComponentType<StepProps> };
      switch (step) {
        case 1:
          component = await import('./StepOne');
          break;
        case 2:
          component = await import('./StepTwo');
          break;
        case 3:
          component = await import('./StepThree');
          break;
        default:
          // Componente de paso predeterminado o lógica de manejo de error
          break;
      }
      setStepComponent(() => component.default);
    };

    loadStepComponent();
  }, [step]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="w-2/3 mx-auto mt-8 ">
      {/* <stepComponent  onNext={handleNext} onPrevious={handlePrevious} /> */}
      {/* <StepOne /> */}
      {/* <StepTwo /> */}
      {/* <StepThree /> */}
      <StepFour />
    </div>
  );
};

export default StepByStepComponent;
