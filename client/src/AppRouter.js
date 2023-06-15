import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './AppNavbar'
import HomePage from './pages/HomePage'
import FoodDiary from './pages/FoodDiary'
import Recipes from './pages/Recipes'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/fooddiary' element={<FoodDiary />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
          

  )
}

export default AppRouter