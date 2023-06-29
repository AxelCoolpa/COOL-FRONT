
import logo from '../../assets/cool.png';
import Carousel from '../carousel/Carousel';

interface Step {
  step: number
}

const GreenSidebar: React.FC<Step> = ({step}) => {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 bg-green-600/80 w-1/4 min-h-screen flex flex-col justify-between">
        <img src={logo} alt="LOGO-COOL" className="w-60 p-8" />
        <div className="p-6 w-full">
         {
          step === 1 && <Carousel />
         }
         {
          step === 2 &&
           <div className='mb-16'>
            <h1 className='text-3xl  text-white uppercase'>Our travel destination is never a place</h1>
            <span className='text-sm block text-white uppercase mt-4'>But a new way of seeing things</span>
          </div>
         }
           
          
        </div>
      </div>
    </div>
  );
};

export default GreenSidebar;
