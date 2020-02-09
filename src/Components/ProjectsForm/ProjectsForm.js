import React, { useState, useEffect } from 'react';
import './ProjectsForm.scss';

const ProjectsForm = ({ addNewProject }) => {

  const nameState = useState('')
  const name = nameState[0]
  const setName = nameState[1]

  const handleNameChange = (e) => {
    return setName(e.target.value)
  }

  const addNewProject = (name) => {
    addNewProject({name: name})
  }
  return (
    <section className="projects-name-form">
      <h2>Create New Project</h2>
      <div className="formBox">
        <label for="name">Name</label>
        <input className="formInput" type="text" name="name" value={name} onChange={handleNameChange}><input>
        <button onClick={addNewProject}>Save Project</button>
      </div>
    </section>
  )
}
