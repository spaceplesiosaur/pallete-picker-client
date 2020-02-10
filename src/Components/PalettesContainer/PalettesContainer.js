import React from 'react';
import './PalettesContainer.scss';

import Palette from '../Palette/Palette';
import SavePaletteForm from '../SavePaletteForm/SavePaletteForm';
import GeneratePalette from '../GeneratePalette/GeneratePalette';

const PalettesContainer = () => {

  const colorListState = useState([{name: "color1", color: "", frozen: false}, {name: "color2", color: "", frozen: false}, {name: "color3", color: "", frozen: false}, {name: "color4", color: "", frozen: false}, {name: "color5", color: "", frozen: false} ])
  const colorList = colorListState[0]
  const changeColor = colorListState[1]

  const freezeColor = (name) => {
    const updatedColors = colorList.forEach(color => {
      if (color.name === name) {
        color.frozen = !color.frozen
      }
    })
    changeColor(updatedColors)
  }

  const makeColors = () => {
    return colorList.map((palette) => {
      <Palette
      key={palette.name}
      freezeColor={freezeColor}
      {...palette}
      />
    })
  }

    return (
      <section className='palette-container'>
          <div className='generate-pal'>
            {makeColors()}
            <GeneratePalette />
          </div>
         <SavePaletteForm />
      </section>
    );
}

export default PalettesContainer;
