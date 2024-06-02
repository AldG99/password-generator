import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  return (
    <div className="app">
      <h1>Generador de Contraseñas</h1>
      <button onClick={generatePassword}>Generar Contraseña</button>
      <input type="text" value={password} readOnly />
    </div>
  );
};

export default App;
