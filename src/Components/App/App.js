import React from 'react';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';

import './App.scss';

import Nav from '../Nav/Nav';
import PalettesContainer from '../PalettesContainer/PalettesContainer';

function App() {
  return (
    <main className="App">
       <Nav />
       <section className='palette-info'>
         <PalettesContainer />
         <ProjectsContainer />
       </section>
    </main>
  );
}

export default App;
