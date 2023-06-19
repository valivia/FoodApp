import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/home';
import RecipePage from './pages/recipes';
import DiaryPage from './pages/diary';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipes' element={<RecipePage />} />
        <Route path='/diary' element={<DiaryPage />} />
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
