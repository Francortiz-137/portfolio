import React from 'react'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../contexts/ThemeContext';

const ThemeManager = () => {

    const { isDark, toggleTheme } = useTheme();


  return (
    <button className="px-4 py-2 bg-transparent rounded-lg hover:text-gray-400 cursor-pointer" 
                        onClick={toggleTheme}>
                    <FontAwesomeIcon icon={ !isDark? faMoon: faSun}/>
    </button>
  )
}

export default ThemeManager