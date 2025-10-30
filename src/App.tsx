import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhatWeDo from './pages/WhatWeDo'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Staffing from './pages/Staffing'
import Careers from './pages/Careers'
import FullTime from './pages/FullTime'
import Contract from './pages/Contract'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/what-we-do" element={<WhatWeDo/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/services/:id" element={<ServiceDetail/>}/>
          <Route path="/staffing" element={<Staffing/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/careers/full-time" element={<FullTime/>}/>
          <Route path="/careers/contract" element={<Contract/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="/about-us" element={<About/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
