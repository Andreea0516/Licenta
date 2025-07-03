import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { resetPassword } from '../../api/users';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  const handleReset = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      confirmPasswordRef.current.setCustomValidity('Parolele nu coincid!');
      confirmPasswordRef.current.reportValidity();
      return;
    } else {
      confirmPasswordRef.current.setCustomValidity('');
    }

    try {
      await resetPassword({ email, oldPassword, newPassword });
      setResetMessage('Parolă resetată cu succes!');
      setErrorMessage('');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      const backendMessage = err?.response?.data?.message || 'Eroare necunoscută.';
      setResetMessage('');
      setErrorMessage(`Eroare: ${backendMessage}`);
    }
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

        {resetMessage && <p style={{ color: 'green', marginTop: '10px' }}>{resetMessage}</p>}
        {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}

        <p onClick={() => navigate('/')} className="login-link">Înapoi la login</p>
      </form>
    </div>
  );
}

export default ResetPassword;
