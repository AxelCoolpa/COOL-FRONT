import React from 'react';
import BackgroundImg from '../../assets/playagreed.png'
import BackgroundWhite from '../../assets/whitegrid.png'

interface Props {
  children: React.ReactNode;
}

const HomeFormSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-2">
      <section className="col-span-1 flex justify-center left-2">
        <img src={BackgroundWhite} className=' bg-center bg-cover w-[25vw] items-center relative z-10 left-2/4 k' />
        <div id="form" className=" absolute w-full">
          {children}
        </div>
      </section>

      <section className="col-span-1 relative">
        <div className="w-full left-4">
          <img src={BackgroundImg} className='bg-center w-full bg-cover bg-no-repeat -z-10' />
        </div>
      </section>
    </div>
  );
};

export default HomeFormSection;
