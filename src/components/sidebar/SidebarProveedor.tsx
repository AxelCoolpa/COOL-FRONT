/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from 'react-icons/bi'
import styles from '../../styles/Global'

import Cool from '../../assets/cool.png'
import Dropdown from "../dropdown/Dropdown";
import UserDropdown from "../dropdown/UserDropdown";
import { GoHome } from "react-icons/go";
import { GrSafariOption } from "react-icons/gr";
import { CgInfinity } from "react-icons/cg";
import { RiCarFill } from "react-icons/ri";
import { FaBed, FaMapMarkerAlt } from "react-icons/fa";
import { BsTicketPerforated } from "react-icons/bs";
import { GiWavyItinerary } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

export default function SidebarProveedor() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className={`${styles.nav}`}>
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          > 
            <BiMenu />

          </button>
          {/* Brand */}
          {/* <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/proveedor-admin/show-discover"
          >
            <div className='flex items-center justify-center'>
              <img src={Cool} alt='Cool-LOGO' className='w-20 mt-12' />
            </div>
          </Link> */}

          {/* User */}



          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <Dropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>




          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-md md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/proveedor-admin/show-discover"
                  >
                  </Link>
                </div>
              </div>
              <div className="w-6/12 flex relative">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <BiMenu />
                </button>
              </div>
            </div>





            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
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





            {/* Divider */}
            <hr className="my-4 md:min-w-full" />









            {/* Heading */}
            <nav className='flex-grow ml-0 xl:ml-0 sm:mt-4 md:mt-0'>
              <ul className='space-y-2'>
                <li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6  gap-2 text-[#808080] hover:text-[#ce452a]'>
                  <a href='/' className='font-semibold'>
                    <GoHome />
                      
                  </a>
                  <p className="flex-grow ml-3 xl:ml-3">   Dashboard</p>
                </li>
                <li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6  gap-2 text-[#808080] hover:text-[#ce452a]'>
                  <a href='/adventure' className='font-semibold'>
                    <GrSafariOption />
                  </a>
                  <p className="flex-grow ml-3 xl:ml-3">   Encuentra</p>
                </li>
                <li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
                  <a href='/package' className='font-semibold'>
                    <CgInfinity />
                  </a>
                  <p className="flex-grow ml-3 xl:ml-3">   Crear</p>
                </li>
                <li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6  gap-2 text-[#808080] hover:text-[#ce452a] '>
                  <a href='/transport' className='font-semibold'>
                    <RiCarFill />
                  </a>
                  <p className="flex-grow ml-3 xl:ml-3">transporte</p>
                </li>
                <li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
                  <a href='/accommodation' className='font-semibold'>
                    <FaBed />
                  </a>  
                  <p className="flex-grow ml-3 xl:ml-3">   Hoteles</p>
                </li>
                <li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
                  <a href='/tickets' className='font-semibold'>
                    <BsTicketPerforated />

                  </a>
                </li>
                <li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
                  <a href='/maps' className='font-semibold'>
                    <FaMapMarkerAlt />
                  </a>

                </li>
                <li className='flex items-center w-fit pt-4 pl-4 2xl:pt-6 gap-2 text-[#808080] hover:text-[#ce452a] '>
                  <a href='/itinarary' className='font-semibold'>
                    <GiWavyItinerary />
                  </a>

                </li>
              </ul>
            </nav>


            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none">

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Settings
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/tables"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Tables
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/maps"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Maps
                </Link>
              </li>
            </ul> */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
          </div>

        </div>
      </nav>
    </>
  );
}
