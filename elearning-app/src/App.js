import logo from './logo.svg';
import './App.css';
import './components/Login/Login'
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import JavaPage from './components/lgCard/JavaPage'; 
import CSSPage from './components/lgCard/CSSPage';
import HTMLPage from './components/lgCard/HTMLPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />}/>
      <Route path="/main" element={<Main />}/>
      <Route path="/java" element={<JavaPage />} />
      <Route path="/css" element={<CSSPage />} />
       <Route path="/html" element={<HTMLPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
