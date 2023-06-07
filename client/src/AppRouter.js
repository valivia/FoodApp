import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import ReviewsPage from './pages/ReviewsPage'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/reviews' element={<ReviewsPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter