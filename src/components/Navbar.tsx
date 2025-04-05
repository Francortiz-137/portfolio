import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ThemeManager from './ThemeManager';
import { useTheme } from '../contexts/ThemeContext';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

const Navbar = () => {
  

    //Languaje toggle
    const { t, i18n } = useTranslation();
    
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  


  return (
    <nav className="bg-transparent p-4 mx-4">
        <div className="container mx-auto flex justify-between items-center max-w-full">
            <button   onClick={toggleMenu}
                    className='cursor-pointer'>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            
            {isOpen && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="w-full md:w-2/3 bg-blue-300 dark:bg-purple-900 rounded-lg shadow-lg p-6 relative">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-8 right-2 text-gray-500 hover:text-red-500 p-2"
                  >
                    <X/>
                  </button>
                  
                    <div
                      className='h-screen w-full flex flex-col justify-between items-left p-4
                        text-6xl'>
                        <div className='p-2 mt-12'>
                          <span className="md:hidden">FO</span>
                          <span className="hidden md:block">FrancoOrtiz</span>
                        </div>
                        <Menu className={`${isOpen ? 'block' : 'hidden'} p-2`}/>
                        <div className='py-6 ml-10 mb-12'>
                          <ThemeManager/>
                          <button
                                onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                                className="text-xl px-4 py-2 bg-transparent rounded-full hover:text-gray-400 cursor-pointer"
                          >
                                {i18n.language === 'es' ? 'Es' : 'En'}
                          </button>
                        </div>
                        
                    </div>
                  
                </div>
        </div>
      )}

            <div className='flex'>
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