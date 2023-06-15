import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/home';
import RecipePage from './pages/recipes';
import DiaryPage from './pages/diary';
import { Navigation } from './components/nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipes' element={<RecipePage />} />
        <Route path='/diary' element={<DiaryPage />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  </React.StrictMode>
);
