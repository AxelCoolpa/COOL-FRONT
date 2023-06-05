import React from 'react';
import "../../index.css"

interface Props {
    children: React.ReactNode
    active: React.ReactNode
}

const HomeFormSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <section className="w-2/3 bg-gray-200 relative z-10 flex items-center justify-center">
        <div className="max-w-lg p-8 bg-white shadow-lg rounded-md">
          <form>
            { children }
          </form>
        </div>
      </section>
      <section className="w-1/3 relative">
        <div className=" h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("path/to/background-image.jpg")' }}>
          <div className={"fadeLeftMini"}
          >
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFormSection;
