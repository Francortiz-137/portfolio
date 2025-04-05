import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="py-8">
        <div className="container mx-auto text-center">
            
            <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-2xl hover:text-gray-400">
            <FontAwesomeIcon icon={faGithub} /> 
            </a>
            <a href="#" className="text-2xl hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} /> 
            </a>
            <a href="#" className="text-2xl hover:text-gray-400">
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
            </div>
            <p className="text-sm pt-4">
                © {new Date().getFullYear()} Francortiz
            </p>
        </div>
    </footer>

  )
}

export default Footer