export const allPalettes = ( state = [], action ) => {
  switch(action.type) {
    case 'SET_PALETTES':
        return action.palettes;
    case 'ADD_PALETTES':
        return [...state, {...action.palette, isLocked: false}];
    default:
        return state;
  }
}