import { motion } from 'motion/react';
import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();
    const defaultImage = '/assets/img/placeholder.svg';
    const image = '/img/placeholder.svg';
  return (
    <div className="container max-w-screen-sm md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center p-6 sm:p-8 rounded-2xl border shadow-lg">
        <motion.h1 animate={{
            scale: 2,
            transition: { duration: 2 }
        }}>
            {t('about.title')}
        </motion.h1>
        <div className="w-full rounded-t-2xl">
            <div className="mx-auto my-6 w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                    src={image || defaultImage}
                    alt="Perfil"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
        <p className="mt-4 text-center text-gray-700  dark:text-gray-300 whitespace-pre-line">{t('about.description')}</p>
    </div>

  )
}

export default About