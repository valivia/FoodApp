import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/home';
import RecipePage from './pages/recipes';
import DiaryPage from './pages/diary';
import ProfilePage from './pages/profile';
import RegisterPage from './pages/auth/register';
import LoginPage from './pages/auth/login';

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
        <Route path='/profile' element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
