import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const { t } = useTranslation();

  return (
    <>
        <div className="min-h-[50vh] md:max-w-[66%] mx-auto flex flex-col bg-white dark:bg-gray-900 bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-lg">
            <div className=' mx-auto'>
                <h1 className="text-left text-5xl font-bold p-2">
                                {t('hero.title')} <br />
                                <span className='text-blue-900 dark:text-blue-400'>Franco Ortiz</span> <br />
                                {t('hero.developer')}
                </h1>
                <p className='text-left mt-4'>{t('hero.description')}</p>
                <div className="flex justify-center items-center text-center md:w-1/3 gap-2 p-2 mt-8 mx-auto flex-wrap">
                    
                    <Link to={routes.contact} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {t('hero.contact')}
                    </Link>
                    <Link to={routes.projects} className="w-full border border-blue-500 py-2 px-4 rounded hover:bg-blue-700 
                        hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {t('hero.cta')}
                    </Link>
                    <button className='border-2 border-blue-500 py-3 px-4 mt-4 hover:bg-blue-700 hover:text-white 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full cursor-pointer
                        text-2xl'
                        aria-label={t('hero.download')}>
                        <FontAwesomeIcon icon={faDownload} className=''/>
                    </button>

                </div>
            </div>
            
            
        </div>
    </>
  )
}

export default Home