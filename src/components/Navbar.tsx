import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import ThemeManager from './ThemeManager';


const Navbar = () => {

    //Languaje toggle
    const { t, i18n } = useTranslation();
    
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    };
  


  return (
    <nav className="bg-transparent p-4 mx-4">
        <div className="container mx-auto flex justify-between items-center max-w-full">
            <button   onClick={toggleMenu}
                    className='cursor-pointer'>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <Menu className={`${isOpen ? 'block' : 'hidden'} bg-gray-700 p-4`}/>
            <div>
                <button
                        onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                        className="px-4 py-2 bg-transparent rounded-full hover:text-gray-400 cursor-pointer"
                >
                        {i18n.language === 'es' ? 'Es' : 'En'}
                </button>
                
                <ThemeManager/>
            </div>
        </div>
    </nav>

  )
}

export default Navbar