// src/components/ReactComponents/BackButton.jsx
import React, { useState, useEffect } from 'react';

const BackButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // El botón solo será visible si hay más de una página en nuestro stack.
    const stackString = sessionStorage.getItem('urlStack');
    const stack = stackString ? JSON.parse(stackString) : [];
    if (stack.length > 1) {
      setIsVisible(true);
    }
  }, []); // El [] asegura que solo se ejecute una vez al montar el componente.

  // Si no debe ser visible, no renderizamos nada.
  if (!isVisible) {
    return null;
  }

  const handleGoBack = (e) => {
    e.preventDefault();

    // 1. Leemos el stack.
    const stackString = sessionStorage.getItem('urlStack');
    let stack = stackString ? JSON.parse(stackString) : [];

    // 2. Quitamos la página actual del stack.
    if (stack.length > 0) {
      stack.pop();
    }
    
    // 3. Obtenemos la URL a la que debemos volver.
    const previousUrl = stack.length > 0 ? stack[stack.length - 1] : '/';

    // 4. Guardamos el stack modificado.
    sessionStorage.setItem('urlStack', JSON.stringify(stack));

    // 5. Navegamos a la URL anterior.
    window.location.href = previousUrl;
  };

  return (
    <a
      href="#"
      onClick={handleGoBack}
      title="Volver a la página anterior"
      className="flex justify-center items-center w-11 h-11 rounded-full bg-black text-white flex-shrink-0 transition-transform hover:scale-110"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5"></path>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </a>
  );
};

export default BackButton;