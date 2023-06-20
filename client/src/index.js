import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/home';
import RecipePage from './pages/recipe/index';
import DiaryPage from './pages/diary/index';
import ProfilePage from './pages/profile';
import RegisterPage from './pages/auth/register';
import LoginPage from './pages/auth/login';
import ModifyRecipe from './pages/recipe/modify';
import CreateDiary from './pages/diary/create';
import CreateRecipe from './pages/recipe/create';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>

        {/* Recipe */}
        <Route path='/recipe' element={<RecipePage />} />
        <Route path='/recipe/new' element={<CreateRecipe />} />
        <Route path='/recipe/:id' element={<ModifyRecipe />} />

        {/* Diary */}
        <Route path='/diary' element={<DiaryPage />} />
        <Route path='/diary/:id' element={<CreateDiary />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
