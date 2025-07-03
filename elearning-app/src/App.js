import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';

import JavaPage from './components/lgCard/JavaPage';
import PythonPage from './components/lgCard/PythonPage';
import JSPage from './components/lgCard/JSPage';
import HTMLPage from './components/lgCard/HTMLPage';
import SQLPage from './components/lgCard/SQLPage';
import CppPage from './components/lgCard/CppPage';
import Register from './components/Register/Register';
import ResetPassword from './components/Login/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/java" element={<JavaPage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/js" element={<JSPage />} />
        <Route path="/html" element={<HTMLPage />} />
        <Route path="/SQL" element={<SQLPage />} />
        <Route path="/cpp" element={<CppPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} /> 
        <Route path="/profile" element={<Profile />} /> 
         <Route path="/profile/edit"element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
