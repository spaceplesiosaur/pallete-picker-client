import React from 'react';
import './GeneratePalette.scss';
import PropTypes from 'prop-types';

const GeneratePalette = ({ randomizeColors }) => {
    return (
      <button className='generate-button' onClick={() => randomizeColors()}> Generate Palette !</button>
    )
};

GeneratePalette.propTypes = {
  randomizeColors : PropTypes.func
};

export default GeneratePalette;
