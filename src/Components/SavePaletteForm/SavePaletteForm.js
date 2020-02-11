import React, { useState } from 'react';
import './SavePaletteForm.scss';

const SavePaletteForm = () => {

   const [paletteName, setPaletteName] = useState('');
   
    // build a method that posts the palette on click of saved palette

    // if input is empty, disable button

    // var that maps through the projects and add inside select
        // projects.map --> <option> project.name </option>

    const handleSubmit = (e) => {
       e.preventDefault();
       
       setPaletteName('');
    }

    return (
       <form className='palette-form'>
           <select>

           </select>
           <input type='text' 
                  placeholder='Add Palette Name'
                  value={paletteName} 
                  onChange={(e) => setPaletteName(e.target.value)} 
            />
           <button onClick={handleSubmit}>Save Palette</button>
       </form>
    ) 
};

export default SavePaletteForm;