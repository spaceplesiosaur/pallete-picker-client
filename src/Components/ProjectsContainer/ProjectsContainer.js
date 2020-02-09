import React, { useState, useEffect } from 'react'
import ProjectsForm from '../ProjectsForm/ProjectsForm'
import ProjectFactory from '../ProjectFactory/ProjectFactory'
import { getData, postProject } from '../../apiCalls.js'
import './ProjectsContainer.scss'

const ProjectsContainer = () => {

  const getProjects = () => {
    return getData('https://palette-picker-ac.herokuapp.com/api/v1/projects', 'projects')
  }

  const makeNewProject = (name) => {
    postProject(name)
    return getProjects()
  }

  const getPalettes = () => {
    return getData('https://palette-picker-ac.herokuapp.com/api/v1/palettes', 'palettes')
  }

  return (
    <section className="project-info-page">
      <section className="projectsForm">
        <ProjectsForm
          makeNewProject={makeNewProjects}
        />
      </section>
      <section className="projectsList">
        <ProjectFactory
          projects={getProjects()}
          getPalettes={getPalettes}
        />
      </section>
    </section>
  )

}

export default ProjectsContainer
