import { allPalettes } from './palettesReducer';

describe('allPalettes reducer', () => {

   it('should return the initial state', () => {
     const expected = [];
     const result = allPalettes(undefined, {});

     expect(result).toEqual(expected);
   });

   it('should return correct state when ADD_PALETTES is passed in the action object', () => {
      const initialState = [];
      const action = {
        type: 'ADD_PALETTES',
        palette: {"color1": "#180353", "color2": "#00A8CF", "color3": "#F7EDB7", "color4": "#EDE0D7", "color5": "#DFE9FD", "isLocked": false, "name": "Seascape"}
      };

      const result = allPalettes(initialState, action);

      const expected = [action.palette];

      expect(result).toEqual(expected);
   })

});