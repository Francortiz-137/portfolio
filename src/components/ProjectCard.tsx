import React from 'react'
import { Project } from '../utils/projects';

const ProjectCard = ({ project }: { project: Project }) => {
    const { title, description, image, technologies, githubUrl, liveUrl, category } = project;
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
        <button>
            {category}
        </button>
        <img className="w-full h-48 object-cover" src={image || 'https://via.placeholder.com/400'} alt="Imagen de la tarjeta" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">{title}</div>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            {description}
          </p>
        </div>
        <div className='flex gap-2'>
            { technologies.map( (tech) => {
                return <button key={tech} className='bg-blue-500'>
                    {tech}
                </button>;
                })
            }
        </div>
        
        <div className="px-6 py-4">
          {githubUrl && (
            <a href={githubUrl} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
              GitHub
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline ml-2">
              Live Demo
            </a>
          )}
        </div>
      </div>
    );
  };

export default ProjectCard