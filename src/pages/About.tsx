import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();
    const defaultImage = '/assets/img/placeholder.svg';
    const image = '/img/placeholder.svg';
    
  return (
    <div className='container max-w-screen-sm md:max-w-2xl mx-auto flex flex-col items-center p-8  rounded-2xl   border'>
        <div className='bg-green-900 w-full rounded-t-2xl' >
            <img
                src={image || defaultImage}
                alt="Perfil"
                className="w-20 h-20 rounded-full mx-auto"
            />
        </div>
        <p>{t('about.description')}</p>
    </div>
  )
}

export default About