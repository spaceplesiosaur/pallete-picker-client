import React, { useState } from 'react';
import './PalettesContainer.scss';

import Palette from '../Palette/Palette';
import SavePaletteForm from '../SavePaletteForm/SavePaletteForm';
import GeneratePalette from '../GeneratePalette/GeneratePalette';

const PalettesContainer = () => {

  const colorListState = useState([{name: "color1", color: "#000000", frozen: false}, {name: "color2", color: "#ffffff", frozen: false}, {name: "color3", color: "#000000", frozen: false}, {name: "color4", color: "#ffffff", frozen: false}, {name: "color5", color: "#000000", frozen: false} ])
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

  const randomizeColors = () => {
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    const newColors = colorList.map(palette => {
      console.log('PALETTE', palette)
      if (palette.frozen === false) {
        console.log('RANDO', randomColor)
        palette.color = `#${Math.floor(Math.random()*16777215).toString(16)}`
        console.log('RANDO', palette.color)
      } else {
        palette.color = palette.color
      }
      return palette;
    })

    console.log('NEW', newColors)
     changeColor(newColors)
  }


    // const makeColors = colorList.map((palette) => {
    //       return (
    //         <Palette
    //           key={palette.name}
    //           freezeColor={freezeColor}
    //           {...palette}
    //       />
    //     )
    //   })

  const makeColors = () => {
    if (colorList) {
      return colorList.map((palette) => {
        console.log('PALETTE', palette)
        return (
          <Palette

            freezeColor={freezeColor}
            {...palette}
        />
      )
      })
    } else {
      return (
        <p>LOADING...</p>
      )
    }

  }

    return (
      <section className='palette-container'>
          <div className='generate-pal'>
            {makeColors()}
            <GeneratePalette
              randomizeColors={randomizeColors}
            />
          </div>
         <SavePaletteForm />
      </section>
    );
}

export default PalettesContainer;
