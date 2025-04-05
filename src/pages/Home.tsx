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
        <div className="min-h-[50vh] md:max-w-[66%] md:mx-auto  bg-white dark:bg-gray-900 bg-opacity-20 backdrop-blur-lg p-4 rounded-xl shadow-lg">
        <div className="flex flex-col items-center md:items-start mx-auto p-2">
            <h1 className="text-left text-4xl md:text-5xl font-bold">
                {t('hero.title')} <br />
                <span className="md:text-6xl text-blue-900 dark:text-blue-400">Franco Ortiz</span> <br />
                {t('hero.developer')}
            </h1>

            <p className="lg:w-1/2 text-left mt-4">{t('hero.description')}</p>

            <div className="flex justify-center items-center text-center gap-4 flex-wrap mt-12">
                <Link
                to={routes.contact}
                className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {t('hero.contact')}
                </Link>
                <Link
                to={routes.projects}
                className="w-full md:w-auto border border-blue-500 py-2 px-4 rounded hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                {t('hero.cta')}
                </Link>

                <button
                className="border-2 border-blue-500 py-3 px-4 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                rounded-full cursor-pointer text-2xl"
                aria-label={t('hero.download')}
                >
                <FontAwesomeIcon icon={faDownload} />
                </button>
            </div>
        </div>

            
            
        </div>
    </>
  )
}

export default Home