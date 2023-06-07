import React from 'react'
import Sidebar from '../components/SideBar'
import SidebarB from '../components/sidebar/SidebarB'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Admin/Dashboard'
import Settings from '../pages/Admin/Settings'
import DashContainer from '../components/sections/dashContainer'

export const Admin = () => {
  return (
    <>
      <SidebarB />
      <DashContainer>
        <Outlet />
      </DashContainer>
    </>
  )
}
