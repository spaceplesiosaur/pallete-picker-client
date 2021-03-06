import React, { useState } from 'react';
import './SavePaletteForm.scss';
import { getData, postProject } from '../../apiCalls';
import { connect } from 'react-redux';
import { setAllProjects, setPalettes } from '../../actions';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

export const SavePaletteForm = ({ colorList, allSetProjects, setAllProjects, setPalettes }) => {
   const [paletteName, setPaletteName] = useState('');
   const [projectID, setProjectID] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
       postPalette(); 
       setPaletteName('');
    };

    const fetchProjectsAgain = async () => {
      const fetchedProjects = await getData('https://palette-picker-ac.herokuapp.com/api/v1/projects', 'projects');
      setAllProjects(fetchedProjects);
    };

    const fetchPalettesAgain = async () => {
      const fetchedPalettes = await getData('https://palette-picker-ac.herokuapp.com/api/v1/palettes', 'palettes');
      setPalettes(fetchedPalettes);
    };

    const postPalette = async () => {
        let completeColours = colorList.map((palette) => {
            return palette.color;
        });
        let palettes = {
            project_id: projectID,
            name: paletteName,
            color1: completeColours[0],
            color2: completeColours[1],
            color3: completeColours[2],
            color4: completeColours[3],
            color5: completeColours[4]
          };
      await postProject('https://palette-picker-ac.herokuapp.com/api/v1/palettes', palettes, 'palettes');
      await fetchPalettesAgain();
      await fetchProjectsAgain();
    };

    const displayProjects = allSetProjects.map(project => {
           return (
            <option key={project.id} value={project.id}>{project.name}</option>
           )
    });

    const chosenProject = (value) => {
      setProjectID(value)
    };
    
    const disableBtn = paletteName.length ? false : true;

    return (
       <form className='palette-form'>
           <select onChange={(e) => chosenProject(e.target.value)}>
               <option>Choose Project</option>
               {displayProjects}
           </select>
           <input type='text'
                  placeholder='Add Palette Name'
                  value={paletteName}
                  onChange={(e) => setPaletteName(e.target.value)}
            />
           <button disabled={disableBtn} onClick={handleSubmit}>Save Palette</button>
       </form>
    )
};
export const mapStateToProps = ({allSetProjects}) => ({
    allSetProjects
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setAllProjects,
    setPalettes
  }, dispatch)
);

SavePaletteForm.propTypes = {
  colorList: PropTypes.array,
  allSetProjects: PropTypes.array,
  setAllProjects: PropTypes.func,
  setPalettes: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SavePaletteForm);
