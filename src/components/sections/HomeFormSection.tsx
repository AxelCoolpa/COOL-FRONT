import React from 'react';
import BackgroundImg from '../../assets/playagreed.png'
import BackgroundWhite from '../../assets/whitegrid.png'

interface Props {
  children: React.ReactNode;
}

const HomeFormSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <section className="w- flex justify-center items-center relative z-10"
      style={{ 
        backgroundImage: `url(${BackgroundWhite})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
        }}
      >
        <div id='form' className="shadow-lg" >
          {children}
        </div>
      </section>
      
      <section className="w-1/3 relative">
        <div className="h-full w-full z-0 bg-cover bg-center bg-no-repeat">
          <img className="h-full" src={BackgroundImg} alt="Background Image" />
        </div>
      </section>
    </div>
  );
};

export default HomeFormSection;
