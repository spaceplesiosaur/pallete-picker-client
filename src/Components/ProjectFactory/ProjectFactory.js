import React from 'react';
import Project from '../Project/Project';
import './ProjectFactory.scss'

const ProjectFactory = ({ projects, palettes, removeProject }) => {
  const generateProjects = () => {
    return projects.map(project => {
      const matchingPalettes = palettes.filter(palette => {
          return palette.project_id === project.id
        })

      return (
        <Project
          key={project.id}
          name={project.name}
          id={project.id}
          palettes={matchingPalettes}
          removeProject={removeProject}
        />
      )
    })
  }
  return (
    <section className="project-factory-renderArea">
      {generateProjects()}
    </section>
  )
}

export default ProjectFactory
