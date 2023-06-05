import React from 'react';
import "../../index.css"

interface Props {
    children: React.ReactNode
}

const HomeFormSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">

      <section className="w-2/3 bg-gray-200 flex justify-center items-center" style={{ background: 'url("path/to/playagreed.png)'}}>        
       <div className="max-w-lg p-8 bg-white shadow-lg rounded-md">
          <h1>Sarar</h1>
          { children }
       </div>
      </section>
      <section className="w-1/3 relative z-0">
          <div className="h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("path/to/assets/playagreded.png")' }}></div>
      </section>
    </div>

  );
};

export default HomeFormSection;
