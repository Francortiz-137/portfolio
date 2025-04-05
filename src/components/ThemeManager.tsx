import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from "lucide-react";


const ThemeManager = () => {

    const { isDark, toggleTheme } = useTheme();


  return (
    <button className="px-4 py-2 bg-transparent rounded-lg hover:text-gray-400 cursor-pointer" 
                        onClick={toggleTheme}>
                    { !isDark? <Moon/>: <Sun/>}
    </button>
  )
}

export default ThemeManager