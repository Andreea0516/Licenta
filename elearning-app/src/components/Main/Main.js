import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
import bgImage from '../../assets/background.png';

function Main() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div
      className="main-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="top-nav">
        <div className="nav-logo">DevPaws</div>
        <button className="nav-button" onClick={() => handleNavigate('/login')}>
          Autentificare
        </button>
      </div>

      <h1 className="main-title">Alege un limbaj de programare:</h1>

      <div className="cards-container">
        <div className="soft-card" onClick={() => handleNavigate('/java')}>Java</div>
        <div className="soft-card" onClick={() => handleNavigate('/python')}>Python</div>
        <div className="soft-card" onClick={() => handleNavigate('/js')}>JavaScript</div>
        <div className="soft-card" onClick={() => handleNavigate('/html')}>HTML</div>
        <div className="soft-card" onClick={() => handleNavigate('/SQL')}>SQL</div>
        <div className="soft-card" onClick={() => handleNavigate('/cpp')}>C++</div>
      </div>
    </div>
  );
}

export default Main;