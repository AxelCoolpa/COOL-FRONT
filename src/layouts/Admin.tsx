import React from 'react'
import Sidebar from '../components/SideBar'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Admin/Dashboard'
import Settings from '../pages/Admin/Settings'

export const Admin = () => {
  return (
      <>
      <div className={'grid grid-col-5 gap-4'}>

        <div className={'col-span-1'}>
        <Sidebar />
        </div>
        <div className={'col-span-4'}>
            <Outlet />
        </div>
      </div>
      </>
  )
}
