import React from 'react'
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t } = useTranslation();

  return (
    <>
        <div className="min-h-[50vh] max-w-[66%] mx-auto flex flex-col bg-white dark:bg-gray-900 bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-lg">
            <div className=' mx-auto'>
                <h1 className="text-left text-5xl font-bold p-2">
                                {t('hero.title')} <br />
                                <span className='text-blue-900 dark:text-blue-400'>Franco Ortiz</span> <br />
                                {t('hero.developer')}
                </h1>
                <p className='text-center mt-4'>{t('hero.description')}</p>
                <div className="flex justify-center gap-2 p-2 mt-8">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {t('hero.contact')}
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {t('hero.cta')}
                    </button>
                </div>
            </div>
            
            
        </div>
    </>
  )
}

export default Home