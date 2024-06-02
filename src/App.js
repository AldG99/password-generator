import React, { useState } from 'react'; // Importar React y useState desde la biblioteca React
import './App.scss'; // Importar los estilos Sass del componente

const App = () => {
  const [password, setPassword] = useState(''); // Estado para almacenar la contraseña generada

  // Función para generar una contraseña aleatoria
  const generatePassword = () => {
    const length = 12; // Longitud de la contraseña
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?"; // Caracteres permitidos

    let newPassword = '';
    // Generar una contraseña aleatoria concatenando caracteres aleatorios
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // Actualizar el estado de la contraseña con la nueva contraseña generada
    setPassword(newPassword);
  };

  // Renderizar el componente de la aplicación
  return (
    <div className="app"> {/* Contenedor principal con la clase 'app' */}
      <h1>Generador de Contraseñas</h1> {/* Título de la aplicación */}
      <button onClick={generatePassword}>Generar Contraseña</button> {/* Botón para generar una nueva contraseña */}
      <input type="text" value={password} readOnly /> {/* Campo de entrada de solo lectura para mostrar la contraseña generada */}
    </div>
  );
};

export default App; // Exportar el componente App por defecto
