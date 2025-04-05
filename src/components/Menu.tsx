import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'
import { useTranslation } from 'react-i18next';

const Menu = ({ className }: { className: string }) => {
    const { t } = useTranslation();
  
    return (
      <ul className={`${className} flex flex-col gap-4`}>
        <li><Link to={routes.home} className="hover:text-gray-400">{t('nav.home')}</Link></li>
        <li><Link to={routes.about} className="hover:text-gray-400">{t('nav.about')}</Link></li>
        <li><Link to={routes.projects} className="hover:text-gray-400">{t('nav.projects')}</Link></li>
        <li><Link to={routes.skills} className="hover:text-gray-400">{t('nav.skills')}</Link></li>
        <li><Link to={routes.contact} className="hover:text-gray-400">{t('nav.contact')}</Link></li>
      </ul>
    );
  };
  

export default Menu