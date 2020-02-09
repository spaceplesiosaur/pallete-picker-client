import React, { useReducer } from 'react';
import './PalettesContainer.scss';

import Palette from '../Palette/Palette';
// import SavePaletteForm from '../SavePaletteForm/SavePaletteForm';
// import GeneratePalette from '../GeneratePalette/GeneratePalette';

const paletteReducer = (state, action) => {
  switch(action.type) {
      case 'palettes':
        return action.palettes;
      case 'add':
        return [...state, {
            name: action.name,
            color1: action.color1,
            color2: action.color2,
            color3: action.color3,
            color4: action.color4,
            color5: action.color5
          }]
     default:
        return state;
  }
};

const PalettesContainer = () => {

   const [state, dispatch] = useReducer(paletteReducer, []);
   const allPalettes = [{
    name: "Ocean",
    color1: "#DFE9FD",
    color2: "#053BA7",
    color3: "#B3C0F7",
    color4: "#4B93FB",
    color5: "#00A8CF"
  }]

    return (
      <section>
          <Palette /> 
      </section>
    );
}

export default PalettesContainer;