import React from 'react';
import Project from '../Project/Project';
import './ProjectFactory.scss';

import PropTypes from 'prop-types';

const ProjectFactory = ({ projects, palettes, removeProject, fetchPalettes }) => {
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
          fetchPalettes={fetchPalettes}
        />
      )
    })
  }
  return (
    <section className="project-factory-renderArea">
      {generateProjects()}
    </section>
  )
};

ProjectFactory.propTypes = {
  projects: PropTypes.array,
  palettes: PropTypes.array,
  removeProject: PropTypes.func,
  fetchPalettes: PropTypes.func
};

export default ProjectFactory
