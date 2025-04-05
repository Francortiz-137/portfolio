import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSearchParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { projects} from '../utils/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const technology = searchParams.get('technology');

    const filteredProjects = technology
    ? projects.filter(project => project.technologies.includes(technology))
    : projects;

  return (
    <>
        <h1 className='text-center text-5xl'>
          { t('projects.title')}
        </h1>
        <div className=' md:max-w-[66%] md:mx-auto  
            bg-opacity-20 backdrop-blur-lg p-4 rounded-xl shadow-lg p-6'>
          <p>
          { t('projects.description')}
          </p>
        </div>
          

        <div className='container flex flex-col md:flex-row md:flex-wrap items-center md:justify-center gap-3 mx-auto p-8'>
            {
                projects.map((project) =>{
                   return <ProjectCard key={project.id} project = {project}/>
                })
            }
        </div>
    </>
  )
}

export default Projects