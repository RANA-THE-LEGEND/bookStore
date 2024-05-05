import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FreeBooks from './components/FreeBooks'
import Course from './components/Course'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <>
    {/* <Course/> */}
    {/* <Banner/> */}
    {/* <FreeBooks/> */}
    {/* <Footer/> */}
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Course/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    
    </BrowserRouter>
    {/* <Signup/> */}
    </>
  )
}

export default App