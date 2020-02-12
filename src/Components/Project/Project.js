import React, { useState, useEffect } from 'react'
import { getData } from '../../apiCalls.js'
import './Project.scss'

const Project = ({ name, palettes, removeProject, id }) => {
  const generatePalettes = () => {
    return palettes.map(palette => {
      const colorList = [palette.color1, palette.color2, palette.color3, palette.color4, palette.color5]
      const generateColors = colorList.map(color => {
        return (
          <li className="colorList-tile" style={{backgroundColor: `${color}`}} key={Object.key}></li>
        )
      })
      return (
        <section className="project-palettes-palette">
          <h3>{palette.name}</h3>
          <ul>{generateColors}</ul>
          <img></img>
        </section>
      )
    })

    }
    return (
      <section className="projectContainer-project">
        <h2>{name}</h2>
        <button className="project-delete-button" onClick={() => removeProject(id)}>DELETE</button>
        <div>{generatePalettes()}</div>
      </section>
    )
  }

export default Project
