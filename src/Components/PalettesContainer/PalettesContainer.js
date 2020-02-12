import React, { useState } from 'react';
import './PalettesContainer.scss';

import Palette from '../Palette/Palette';
import SavePaletteForm from '../SavePaletteForm/SavePaletteForm';
import GeneratePalette from '../GeneratePalette/GeneratePalette';

const PalettesContainer = () => {

  const colorListState = useState([{name: "color1", color: "#B42D91", frozen: false}, {name: "color2", color: "#890CA6", frozen: false}, {name: "color3", color: "#B42D91", frozen: false}, {name: "color4", color: "#890CA6", frozen: false}, {name: "color5", color: "#B42D91", frozen: false} ]);
  const colorList = colorListState[0];
  const changeColor = colorListState[1];

  const freezeColor = (name) => {
    const updatedColors = colorList.map(color => {
      if (color.name === name) {
        color.frozen = !color.frozen
      }
      return color;
    });
    changeColor(updatedColors)
  }

  const randomizeColors = () => {
    const newColors = colorList.map(palette => {
      if (palette.frozen === false) {
        palette.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      } 
      return palette;
    });

     changeColor(newColors);
  }

  const makeColors = colorList.map((palette) => {
        return (
          <Palette
            key={palette.name}
            freezeColor={freezeColor}
            {...palette}
        />
         )
  });

    return (
      <section className='palette-container'>
          <div className='generate-pal'>
            <div className='pal'>
              {makeColors}
            </div>
            <GeneratePalette
              randomizeColors={randomizeColors}
            />
          </div>
         <SavePaletteForm colorList={colorList}/>
      </section>
    );
}

export default PalettesContainer;
