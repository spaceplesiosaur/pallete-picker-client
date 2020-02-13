import * as actions from './index';

describe('Actions', () => {

    describe('Set Palettes', () => {
       
     it('should return an object containing type: "SET_PALETTES" and the palettes', () => {
        const mockPalettes = [
            {
                "name": "Seascape",
                "color1": "#180353",
                "color2": "#00A8CF",
                "color3": "#F7EDB7",
                "color4": "#EDE0D7",
                "color5": "#DFE9FD",
                "project_id": 12
            }
        ];

        const expectedActions = {
           type:'SET_PALETTES',
           palettes: mockPalettes
        };

        const result = actions.setPalettes(mockPalettes);
        expect(result).toEqual(expectedActions);

     })

    });

    describe('Add Palettes', () => {

        it('should return an object containing type: "ADD_PALETTES" and the palettes', () => {

            const mockPalettes = {
                    "name": "Seascape",
                    "color1": "#180353",
                    "color2": "#00A8CF",
                    "color3": "#F7EDB7",
                    "color4": "#EDE0D7",
                    "color5": "#DFE9FD",
                    "project_id": 12
                };
    
            const expectedActions = {
               type:'ADD_PALETTES',
               palette: mockPalettes
            };
    
            const result = actions.addPalettes(mockPalettes);
            expect(result).toEqual(expectedActions);
        })

    });

    describe('Add Projects', () => {

        it('should return an object containing type: "ADD_PROJECTS" and the projects', () => {
            const mockPalettes = [
                {
                    "name": "Bathroom walls",
                    "current": true
                }
            ];
    
            const expectedActions = {
               type:'ADD_PROJECTS',
               projects: mockPalettes
            };
    
            const result = actions.setAllProjects(mockPalettes);
            expect(result).toEqual(expectedActions);
        })

    });
})