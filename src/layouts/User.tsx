"use client"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchUsers } from "../features/usersSlice";
import {
  fetchDestinations,
  fetchDestinationsStart,
} from "../features/destinationSlice";
import UserNav from "../components/Navbars/UserNav";
import SidebarUser from "../components/sidebar/SidebarUser";
import DashContainer2 from "../components/sections/dashContainer2";

export const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <SidebarUser />
      <DashContainer2>
        <UserNav />
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-20 flex flex-wrap items-center justify-between w-full mx-auto">
          <Outlet />
        </div>
      </DashContainer2>
    </>
  );
};
