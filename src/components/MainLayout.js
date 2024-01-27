import React from 'react'
import TopNavBar from './TopNavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <TopNavBar/> 
      <Outlet/>

    </div>
  )
}

export default MainLayout
