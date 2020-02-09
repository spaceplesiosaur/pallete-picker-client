import React, { useState, useEffect } from 'react'
import ProjectsForm from '../ProjectsForm/ProjectsForm'
import ProjectFactory from '../ProjectFactory/ProjectFactory'
import { getData } from '../../apiCalls.js'
import './ProjectsContainer.scss'

const ProjectsContainer = () => {


  return (
    <section className="project-info-page">
      <section className="projectsForm">
        <ProjectsForm />
      </section>
      <section className="projectsList">
        <ProjectFactory />
      </section>
    </section>
  )

}

export default ProjectsContainer
