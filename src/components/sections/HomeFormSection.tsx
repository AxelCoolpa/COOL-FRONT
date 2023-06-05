import React from 'react';
import "../../index.css"
import BackgroundImg from '../../assets/playagreed.png'
import BackgroundWhite from '../../assets/withegrid.png'

interface Props {
  children: React.ReactNode;
}

const HomeFormSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <section className="w-2/3 bg-gray-200 flex justify-center items-center relative z-10">
        <div id='primero' className="max-w-lg p-8 bg-white shadow-lg rounded-md" style={{ backgroundImage: `url(${BackgroundWhite})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1>Sarar</h1>
          {children}
        </div>
      </section>
      <section className="w-1/3 relative z-0">
        <div className="h-full bg-cover bg-center bg-no-repeat">
          <img className="h-full bg-center" src={BackgroundImg} alt="Background Image" />
        </div>
      </section>
    </div>
  );
};

export default HomeFormSection;
