import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
            <p className="text-sm">
            &copy; 2025 Mi Sitio Web. Todos los derechos reservados.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h16M8 16h16M8 20h16"></path>
                </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </a>
            </div>
        </div>
    </footer>

  )
}

export default Footer