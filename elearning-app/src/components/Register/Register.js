import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import backgroundImg from '../../assets/fundal2.PNG';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();


  const confirmPasswordRef = useRef(null);

  const handleRegister = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {

      confirmPasswordRef.current.setCustomValidity("Parola nu coincide!");
      confirmPasswordRef.current.reportValidity(); 
      return;
    } else {

      confirmPasswordRef.current.setCustomValidity('');
    }

    alert('Înregistrare cu succes!');
    navigate('/login');
  };

  return (
    <div
      className="register-container"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Înregistrare</h2>

        <input
          type="text"
          placeholder="Prenume"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Nume"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Nume utilizator"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Parolă"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirmă parola"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          ref={confirmPasswordRef}
          required
        />

        <button type="submit">Înregistrează-te</button>

        <p onClick={() => navigate('/')} className="login-link">
          Ai deja cont? Login
        </p>
      </form>
    </div>
  );
}

export default Register;
