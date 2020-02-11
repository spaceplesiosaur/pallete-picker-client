import React from 'react';
import './Palette.scss';
import { FiLock, FiUnlock } from 'react-icons/fi';


const Palette = ({ name, color, frozen, freezeColor }) => {

   const toggleIcon = frozen ? <FiLock /> : <FiUnlock />;

  return (
    <section className='palette' style={{backgroundColor:`${color}`}} onClick={() => freezeColor(name)}>
      {toggleIcon }
      <p>Hex-Code: {color}</p>
    </section>
  )
};


export default Palette;
