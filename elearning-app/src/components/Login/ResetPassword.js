import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate();

  const confirmPasswordRef = useRef(null);

  const handleReset = (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      confirmPasswordRef.current.setCustomValidity('Parolele nu coincid!');
      confirmPasswordRef.current.reportValidity();
      return;
    } else {
      confirmPasswordRef.current.setCustomValidity('');
    }

    // Simulează resetarea parolei
    console.log('Resetare pentru:', email);
    console.log('Parolă veche:', oldPassword);
    console.log('Nouă parolă:', newPassword);

    alert('Parolă resetată cu succes (simulat).');
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleReset}>
        <h2>Resetare parolă</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Parola veche"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Parolă nouă"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirmă parola nouă"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          ref={confirmPasswordRef}
          required
        />

        <button type="submit">Resetează parola</button>

        <p onClick={() => navigate('/')} className="login-link">
          Înapoi la login
        </p>
      </form>
    </div>
  );
}

export default ResetPassword;
