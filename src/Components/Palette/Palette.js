import React, { useState, useEffect } from 'react';
import './Palette.scss';
import { FiLock, FiUnlock } from 'react-icons/fi';


const Palette = ({ name, color, frozen, freezeColor }) => {

  return (
    <section className='palette' style={{backgroundColor:`${color}`}} onClick={() => freezeColor(name)}>

      <FiLock />
      <p>HexCode: {color}</p>
    </section>
  )
};


export default Palette;
