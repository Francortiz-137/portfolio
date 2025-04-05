import React, { createContext, useContext, useState, useEffect } from 'react';

// Definir los tipos para el contexto
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Crear el contexto con valores predeterminados
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Proveedor de contexto para envolver la aplicación
interface ThemeProviderProps {
  children: React.ReactNode;  // Aquí declaramos que `children` puede ser cualquier nodo de React
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Estado que almacena si el tema es oscuro o no
  const [isDark, setIsDark] = useState<boolean>(false);

  // Efecto para manejar la carga inicial y la persistencia en localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  // Cambiar el tema y actualizar localStorage
  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  // Añadir o quitar la clase 'dark' al documento según el estado
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para consumir el contexto de tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};
