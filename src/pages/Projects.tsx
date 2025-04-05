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
        <h1></h1>
        <p></p>

        <div>
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