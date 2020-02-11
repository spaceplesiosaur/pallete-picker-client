import React, { useState, useEffect } from 'react'
import ProjectsForm from '../ProjectsForm/ProjectsForm'
import ProjectFactory from '../ProjectFactory/ProjectFactory'
import { getData, postProject, deleteProject } from '../../apiCalls.js'
import { connect } from 'react-redux';
import { setAllProjects } from '../../actions';
import { bindActionCreators } from 'redux';
import './ProjectsContainer.scss';

const ProjectsContainer = () => {

  const projectState = useState([]);
  const projects = projectState[0];
  const setProjects = projectState[1];

  const paletteState = useState([]);
  const palettes = paletteState[0];
  const setPalettes = paletteState[1];

  const fetchProjects = async () => {
    const fetchedProjects = await getData('https://palette-picker-ac.herokuapp.com/api/v1/projects', 'projects');
    setProjects(fetchedProjects);
    setAllProjects(fetchedProjects);
  }

  const fetchPalettes = async () => {
    const fetchedPalettes = await getData('https://palette-picker-ac.herokuapp.com/api/v1/palettes', 'projects');
    setPalettes(fetchedPalettes);
  }

  useEffect(async () => {
    await fetchProjects()
    await fetchPalettes()
  }, [])

  const makeNewProject = async (name) => {
    await postProject('https://palette-picker-ac.herokuapp.com/api/v1/projects', name, 'project');
    return await fetchProjects();
  }

  const removeProject = async (id) => {
    await deleteProject(id);
    return await fetchProjects();
  }

  return (
    <section className="project-info-page">
      <section className="projectsForm">
        <ProjectsForm
          addNewProject={makeNewProject}
        />
      </section>
      <section className="projectsList">
        <ProjectFactory
          projects={projects}
          palettes={palettes}
          removeProject={removeProject}
        />
      </section>
    </section>
  )

}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ 
    setAllProjects
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ProjectsContainer);
