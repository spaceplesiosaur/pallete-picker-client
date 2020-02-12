import React, { useState } from 'react';
import './SavePaletteForm.scss';
import { postProject } from '../../apiCalls';
import { connect } from 'react-redux';

export const SavePaletteForm = ({ colorList, allSetProjects }) => {
   const [paletteName, setPaletteName] = useState('');
   const [projectID, setProjectID] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
       postPalette();
       setPaletteName('');
    }
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

const mapStateToProps = ({allSetProjects}) => ({
    allSetProjects
});

export default connect(mapStateToProps, null)(SavePaletteForm);