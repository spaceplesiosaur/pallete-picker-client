import { allSetProjects } from './projectsReducer';

describe('allSetProjects reducers', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = allSetProjects(undefined, {});

    expect(result).toEqual(expected); 
  });

})