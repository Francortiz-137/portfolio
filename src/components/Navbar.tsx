import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">Mi Logo</a>
            <Menu/>
            <a href="#" className="px-4 py-2 bg-transparent rounded-lg hover:bg-gray-200">Iniciar sesión</a>
        </div>
    </nav>

  )
}

export default Navbar