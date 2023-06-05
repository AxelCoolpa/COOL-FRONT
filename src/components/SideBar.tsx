import React from 'react';
import Cool from '../assets/cool.png'
import avatar from "../assets/background-Cool.jpeg"

const Sidebar: React.FC = () => {
  return (
    <div className="lg:flex flex-col h-screen w-[15vw] border rounded-lg border-gray-300 shadow-2xl">
    <div>
      <img src={Cool} alt="Cool-LOGO" className="w-20 mt-6 ml-3" />
    </div>
    <nav className="flex-grow ml-4 ">
      <ul className="space-y-2">
        <li className="p-4">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-gray-400">
            Adventure
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-gray-400">
            Package
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-gray-400">
            Transport
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-gray-400">
            Accommodation
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-gray-400">
            Tickets
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="hover:text-gray-400">
            Maps
          </a>
        </li>
      </ul>
    </nav>
    <div className="p-4 mb-6">
      {/* Avatar */}
      <div className="flex items-center justify-center">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div className="ml-2">
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs">john.doe@example.com</p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Sidebar;
