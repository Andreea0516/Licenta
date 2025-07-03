import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: 'andreea.dev',
    name: '',
    email: '',
    avatar: 'cat1.png'
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('profileData'));
    if (savedData) {
      setUser((prev) => ({
        ...prev,
        name: savedData.name || '',
        email: savedData.email || '',
        avatar: savedData.avatar || 'cat1.png'
      }));
    }
  }, []);

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleMainPage = () => {
    navigate('/main');
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar-container">
          <img
            src={`/avatars/${user.avatar}`}
            alt="Avatar"
            className="profile-avatar"
          />
        </div>
        <h2 className="username">@{user.username}</h2>
        <p><strong>Nume:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <div className="profile-buttons">
          <button className="edit-btn" onClick={handleEditProfile}>✏️ Editează profil</button>
          <button className="home-btn" onClick={handleMainPage}>🏠 Pagina principală</button>
          <button className="logout-btn" onClick={handleLogout}>📕 Delogare</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
