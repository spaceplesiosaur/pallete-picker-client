import React from 'react';
import './App.scss';

import Nav from '../Nav/Nav';
import PalettesContainer from '../PalettesContainer/PalettesContainer';

function App() {
  return (
    <main className="App">
       <Nav />
       <section className='palette-info'>
          <PalettesContainer />
       </section>
    </main>
  );
}

export default App;
