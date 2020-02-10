import { combineReducers } from 'redux';
import { allPalettes } from './palettesReducer';

const rootReducer = combineReducers({
  allPalettes
});

export default rootReducer;