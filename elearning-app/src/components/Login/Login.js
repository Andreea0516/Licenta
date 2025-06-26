import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === 'admin') {
      setLoginError('');
      navigate('/main');
    } else {
      setLoginError('Date incorecte. Încearcă din nou.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Autentificare</button>

        {loginError && (
          <p style={{ color: 'red', marginTop: '10px' }}>{loginError}</p>
        )}

        <div className="login-links">
          <p onClick={() => navigate('/reset')} className="login-link">Ai uitat parola?</p>
          <p onClick={() => navigate('/register')} className="login-link">Nu ai cont? Înregistrează-te aici</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
