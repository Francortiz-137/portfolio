import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'

const Menu = () => {
  return (
    <ul className="flex space-x-6">
        <li><Link to={routes.home} className="hover:text-gray-400">Inicio</Link></li>
        <li><Link to={routes.about} className="hover:text-gray-400">About</Link></li>
        <li><Link to={routes.projects} className="hover:text-gray-400">Projects</Link></li>
        <li><Link to={routes.skills} className="hover:text-gray-400">Contacto</Link></li>
        <li><Link to={routes.contact} className="hover:text-gray-400">Contacto</Link></li>
    </ul>
  )
}

export default Menu