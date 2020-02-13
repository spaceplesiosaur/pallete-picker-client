import React, { useState, useEffect } from 'react'
import { getData, deleteProject } from '../../apiCalls.js'
import './Project.scss'
import PropTypes from 'prop-types';

const Project = ({ name, palettes, removeProject, id, fetchPalettes }) => {

  const removePalette = async (id) => {
    await deleteProject(id, "palettes")
    await fetchPalettes()
  }

  const generatePalettes = () => {
    return palettes.map(palette => {
      const colorList = [palette.color1, palette.color2, palette.color3, palette.color4, palette.color5]
      const generateColors = colorList.map(color => {
        return (
        <li className="colorList-tile" style={{backgroundColor: `${color}`}} key={Object.key}><span>{color}</span></li>
        )
      });
      
      console.log({palette})

      return ( 
        <section className="project-palettes-palette">
          <h3>{palette.name}</h3>
          <button className="palette-delete-button" onClick={() => removePalette(palette.id)}>Remove</button>
          <ul>{generateColors}</ul>
        </section>
      )
    })
    };

    const showHexs = (colors) => {
      console.log(showHexs);
    };

    return (
      <section className="projectContainer-project">
        <h2>{name}</h2>
        <button className="project-delete-button" onClick={() => removeProject(id)}>DELETE</button>
        <div onClick={() => showHexs()}>{generatePalettes()}</div>
      </section>
    )
};

Project.propTypes = {
  name: PropTypes.string,
  palettes: PropTypes.array,
  removeProject: PropTypes.func,
  id: PropTypes.number,
  fetchPalettes: PropTypes.func
};

export default Project
