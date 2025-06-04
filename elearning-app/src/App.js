import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Main from './components/Main/Main';

import JavaPage from './components/lgCard/JavaPage';
import PythonPage from './components/lgCard/PythonPage';
import JSPage from './components/lgCard/JSPage';
import HTMLPage from './components/lgCard/HTMLPage';
import SQLPage from './components/lgCard/SQLPage';
import CppPage from './components/lgCard/CppPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/java" element={<JavaPage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/js" element={<JSPage />} />
        <Route path="/html" element={<HTMLPage />} />
        <Route path="/SQL" element={<SQLPage />} />
        <Route path="/cpp" element={<CppPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
