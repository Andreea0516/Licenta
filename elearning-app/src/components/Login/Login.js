import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import { loginUser } from '../../api/users';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ username, password });
      localStorage.setItem('userId', data.user.id); 
      localStorage.setItem('profileData', JSON.stringify({
        username: data.user.username,
        email: data.user.email
      }));
      setLoginError('');
      navigate('/main');
    } catch (err) {
      setLoginError('Date incorecte. Încearcă din nou.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Parolă" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Autentificare</button>
        {loginError && <p style={{ color: 'red', marginTop: '10px' }}>{loginError}</p>}
        <div className="login-links">
          <p onClick={() => navigate('/reset')} className="login-link">Ai uitat parola?</p>
          <p onClick={() => navigate('/register')} className="login-link">Nu ai cont? Înregistrează-te aici</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
