import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';

function EditProfile() {
  const navigate = useNavigate();

  // Inițializare state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('cat1.png');

  // Avatare disponibile (din public/avatars/)
  const avatarOptions = [
    'cat1.png', 'cat2.png', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg',
    'bunny.jpg', 'dogs.jpeg', 'otter.png', 'panda.jpg'
  ];

  // La montare, preia datele salvate
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('profileData'));
    if (savedData) {
      setName(savedData.name || '');
      setEmail(savedData.email || '');
      setSelectedAvatar(savedData.avatar || 'cat1.png');
    }
  }, []);

  // Salvează în localStorage și redirecționează
  const handleSave = () => {
    const profileData = {
      name,
      email,
      avatar: selectedAvatar
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));
    navigate('/profile');
  };

  return (
    <div className="edit-profile-container">
      <h2>Editează Profilul</h2>

      <div className="avatar-preview">
        <img src={`/avatars/${selectedAvatar}`} alt="Avatar" />
      </div>

      <label>Nume complet</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Alege un avatar</label>
      <div className="avatar-grid">
        {avatarOptions.map((avatar, index) => (
          <div
            key={index}
            className={`avatar-option ${selectedAvatar === avatar ? 'selected' : ''}`}
            onClick={() => setSelectedAvatar(avatar)}
          >
            <img src={`/avatars/${avatar}`} alt={`Avatar ${index}`} />
          </div>
        ))}
      </div>

      <div className="buttons">
        <button className="save-btn" onClick={handleSave}>
          💾 Salvează
        </button>
        <button className="cancel-btn" onClick={() => navigate('/profile')}>
          ❌ Anulează
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
