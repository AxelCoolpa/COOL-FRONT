import React from "react";
import { FiBell, FiMessageSquare, FiHeart, FiSearch } from "react-icons/fi";

import Cool from '../../assets/cool.png'
import UserDropdown from "../dropdown/UserDropdown";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-3">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        {/* <Link
            className="md:relative text-left text-blueGray-600 whitespace-nowrap text-sm uppercase font-bold px-0"
            to="/proveedor-admin/show-discover"
          >
            <div className='flex items-left justify-left'>
              <img src={Cool} alt='Cool-LOGO' className='w-20' />
            </div>
          </Link> */}
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className="md:flex hidden pl-10 flex-row flex-wrap items-center lg:ml-auto mr-3">
          <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <FiSearch className="text-blueGray-300 text-xl" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          <div className="flex flex-wrap items-stretch pl-6 pr-6  space-x-4">
            <FiHeart className="text-blueGray-300 text-xl" />
            <FiMessageSquare className="text-blueGray-300 text-xl" />
            <FiBell className="text-blueGray-300 text-xl" />
          </div>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

export default Navbar;
