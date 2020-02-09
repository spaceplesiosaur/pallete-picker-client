import React from 'react';
import Project from '../Project/Project';
import './Project.scss'

const ProjectFactory = ({ projects, getPalettes }) => {
  const generateProjects = () => {
    projects.map(project => {
      const matchingPalettes = () => {
        getPalletes().map(palette => {
          return palette.project_id === project.id
        })
      }
      return (
        <Project
          name={project.name}
          palettes={matchingPalettes}
        />
      )
    })
  }
  return {
    <section className="project-factory-renderArea">
      {generateProjects()}
    </section>
  }
}
