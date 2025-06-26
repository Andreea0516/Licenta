import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  const handleReset = (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      confirmPasswordRef.current.setCustomValidity('Parolele nu coincid!');
      confirmPasswordRef.current.reportValidity();
      return;
    } else {
      confirmPasswordRef.current.setCustomValidity('');
    }

    setResetMessage('Parolă resetată cu succes!');
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleReset}>
        <h2>Resetare parolă</h2>

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Parola veche" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
        <input type="password" placeholder="Parolă nouă" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        <input
          type="password"
          placeholder="Confirmă parola nouă"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          ref={confirmPasswordRef}
          required
        />

        <button type="submit">Resetează parola</button>
        {resetMessage && <p style={{ color: 'green', marginTop: '10px' }}>{resetMessage}</p>}

        <p onClick={() => navigate('/')} className="login-link">Înapoi la login</p>
      </form>
    </div>
  );
}

export default ResetPassword;
