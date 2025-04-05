import React from 'react'

const Menu = () => {
  return (
    <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
        <li><a href="#services" className="hover:text-gray-400">Servicios</a></li>
        <li><a href="#about" className="hover:text-gray-400">Nosotros</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contacto</a></li>
    </ul>
  )
}

export default Menu