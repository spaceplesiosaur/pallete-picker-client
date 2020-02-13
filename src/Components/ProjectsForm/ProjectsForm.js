import React, { useState, useEffect } from 'react';
import './ProjectsForm.scss';

import PropTypes from 'prop-types';

const ProjectsForm = ({ addNewProject }) => { 

  const nameState = useState('')
  const name = nameState[0]
  const setName = nameState[1]

  const handleNameChange = (e) => {
    return setName(e.target.value)
  }

  const makeProject = () => {
    addNewProject({name: name})
    setName('')
  } 
  return (
    <section className="projects-name-form">
      <h2>Create New Project</h2>
      <div className="formBox">
        <label for="name">Name</label>
        <input className="formInput" type="text" name="name" value={name} onChange={handleNameChange}></input>
        <button onClick={makeProject} className="saveProjectButton">Save Project</button>
      </div>
    </section>
  )
};

ProjectsForm.propTypes = {
  addNewProject: PropTypes.func
}

export default ProjectsForm
