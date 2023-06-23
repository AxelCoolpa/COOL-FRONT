import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

import Cool from '../assets/cool.png'
import avatar from "../assets/background-Cool.jpeg"

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative">
      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center justify-end p-4">
        <BiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden sm:flex sm:flex-col md:flex md:flex-row h-screen mt-6 border rounded-lg border-gray-300 shadow-2xl">
        <div className="sm:w-1/4 md:w-[15vw]">
          <img src={Cool} alt="Cool-LOGO" className="w-20 mt-4 ml-3" />
        </div>
        <nav className="flex-grow ml-4 sm:mt-4 md:mt-0">
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="absolute top-0 right-0 p-4">
            <BiMenu
              className="text-2xl text-white cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <nav className="flex flex-col items-center justify-center h-screen">
            <ul className="space-y-4">
              <li className="p-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="p-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Adventure
                </a>
              </li>
              <li className="p-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Package
                </a>
              </li>
              <li className="p-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Transport
                </a>
              </li>
              <li className="p-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Accommodation
                </a>
              </li>
              <li className="p-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Tickets
                </a>
              </li>
              <li className="p-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Maps
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
