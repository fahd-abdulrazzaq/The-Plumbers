import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../src/App.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Main() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
