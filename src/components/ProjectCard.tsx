import React from 'react'
import { Project } from '../utils/projects';
import { ArrowRight, ExternalLink, Github, LogIn } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => {
    const { id, title, description, image, technologies, githubUrl, liveUrl, category } = project;
  
    return (
      <div className="max-w-sm md:max-w-[350px] min-h-[550px] 
                      flex flex-col justify-between rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 relative">
        <button className='bg-red-700 text-white rounded-lg px-2 top-2 right-2 absolute'>
            {category}
        </button>
        <img className="w-full h-48 object-cover" src={image || 'https://placehold.co/600x400'} alt="Imagen de la tarjeta" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">{title}</div>
            <p className=" min-h-[75px] text-gray-700 dark:text-gray-300 text-base">
                {description}
            </p>
        </div>
        <div className='flex flex-wrap gap-2 px-6 py-2'>
            {technologies.map((tech, index) => {
                return <button key={index} className='border border-blue-500 rounded rounded-full px-1 text-sm text-blue-500'>
                    {tech}
                </button>;
            })}
        </div>

        <div className="flex gap-4 px-6 py-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
</div>

    );
  };

export default ProjectCard