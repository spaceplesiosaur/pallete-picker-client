import React from 'react';
import Project from '../Project/Project';
import './ProjectFactory.scss'

const ProjectFactory = ({ projects, palettes }) => {
  const generateProjects = () => {
    return projects.map(project => {
      const matchingPalettes = palettes.filter(palette => {
          return palette.project_id === project.id
        })

      return (
        <Project
          name={project.name}
          palettes={matchingPalettes}
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
