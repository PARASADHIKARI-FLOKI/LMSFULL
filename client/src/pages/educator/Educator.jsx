import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/educator/NavBar'
import Siderbar from '../../components/educator/Siderbar'
import Footer from '../../components/educator/Footer'

const Educator = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <NavBar />
      <div className='flex'>
        <Siderbar/>
        <div className='flex-1'>
       { <Outlet />}
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Educator
