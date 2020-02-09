import React from 'react';
import './Palette.scss';
import { FiLock, FiUnlock } from 'react-icons/fi';

const Palette = ({ color1, color2, color3, color4, color5 }) => {
    console.log(color1)
    return (
      <section clasName='palette' style={{backgroundColor:`${color1}`}} >
       
        <FiLock />
        <p>HexCode: #{color1}</p>
      </section>
    )
};

export default Palette;