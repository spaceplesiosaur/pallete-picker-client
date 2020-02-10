import React from 'react';
import './GeneratePalette.scss';

const GeneratePalette = ({ randomizeColors }) => {
    return (
      <button className='generate-button' onClick={() => randomizeColors()}> Generate Palette !</button>
    )
}

export default GeneratePalette;
