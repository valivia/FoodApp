import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './AppNavbar'
import HomePage from './pages/HomePage'
import ReceptenDatabase from './pages/ReceptenDatabase'
import EetDagboek from './pages/EetDagboek';

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/recepten' element={<ReceptenDatabase />} />
        <Route path='/dagboek' element={<EetDagboek />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
          

  )
}

export default AppRouter