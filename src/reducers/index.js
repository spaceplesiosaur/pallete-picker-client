import { combineReducers } from 'redux';
import { allPalettes } from './palettesReducer';
import { allSetProjects } from './projectsReducer';

const rootReducer = combineReducers({
  allPalettes,
  allSetProjects
});

export default rootReducer;