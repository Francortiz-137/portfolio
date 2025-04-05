import React, { useEffect, useState } from 'react'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeManager = () => {

    // Comprobar el tema guardado en localStorage o usar el valor predeterminado (oscuro)
    const savedTheme = localStorage.getItem('theme');
    const [isDark, setIsDark] = useState(savedTheme === 'dark');

    // Cuando el tema cambia, actualizar el 'document.documentElement' y almacenar en localStorage
    useEffect(() => {
        if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    // Función para cambiar el tema
    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

  return (
    <button className="px-4 py-2 bg-transparent rounded-lg hover:text-gray-400 cursor-pointer" 
                        onClick={() => setIsDark(!isDark)}>
                    <FontAwesomeIcon icon={ !isDark? faMoon: faSun}/>
                </button>
  )
}

export default ThemeManager