import React from 'react'
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom'
import Home from "../pages/home/Home"
import Homeplans from '../pages/homePlans/Homeplans'
import Header from '../components/header/Header'
import Plandetail from '../pages/PlanDetail/Plandetail'
import Footer from '../components/footer/Footer'
function Routers() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Navigate to ="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/homeplan" element={<Homeplans/>}/>
            <Route  path="/plandetail/:params"  element={<Plandetail/>}/>
            <Route/>
            <Route/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Routers