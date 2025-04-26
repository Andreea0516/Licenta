import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css'; 

function Main() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="main-container">
      <h2 className="welcome-message">Welcome!</h2>
      <div className="cards-container">
        <div className="card" onClick={() => handleNavigate('/java')}>
          Java
        </div>
        <div className="card" onClick={() => handleNavigate('/css')}>
          CSS
        </div>
        <div className="card" onClick={() => handleNavigate('/html')}>
          HTML
        </div>
      </div>
    </div>
  );
}

export default Main;
