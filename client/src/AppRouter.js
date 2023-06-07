import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'
import FoodDiaryPage from './pages/FoodDiaryPage'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/recipes' element={<RecipePage />} />
        <Route path='/fooddiary' element={<FoodDiaryPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter