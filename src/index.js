import React from 'react'; // Importar la biblioteca React
import ReactDOM from 'react-dom/client'; // Importar ReactDOM para renderizar en el DOM
import './index.css'; // Importar estilos CSS
import App from './App'; // Importar el componente principal de la aplicación

// Crear un punto de entrada en el DOM con ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación dentro de un React.StrictMode para detectar problemas potenciales
root.render(
  <React.StrictMode>
    <App /> {/* Renderizar el componente principal de la aplicación */}
  </React.StrictMode>
);
