import React from 'react';
import './PalettesContainer.scss';

import Palette from '../Palette/Palette';
import SavePaletteForm from '../SavePaletteForm/SavePaletteForm';
import GeneratePalette from '../GeneratePalette/GeneratePalette';

const PalettesContainer = () => {

   const allPalettes = [{
    name: "Ocean",
    color1: "#DFE9FD",
    color2: "#053BA7",
    color3: "#B3C0F7",
    color4: "#4B93FB",
    color5: "#00A8CF"
  }];

  const thePalette = allPalettes.map((palette) => <Palette key={palette.name} {...palette} /> )

    return (
      <section className='palette-container'>
          <div className='generate-pal'>
            {thePalette}
            <GeneratePalette />
          </div>
         <SavePaletteForm />
      </section>
    );
}

export default PalettesContainer;