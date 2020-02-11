import {getData, postProject, deleteProject} from './apiCalls'

describe('getData', () => {
  let mockInfo;

  beforeEach(() => {
        mockInfo = [
      {
        id: 1,
        name: "Bathroom walls",
        current: true,
      },
      {
        id: 2,
        name: 'Kid bedroom',
        current: false,
      },
      {
        id: 3,
        name: 'Living room',
        current: false,
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
          json: () => {
            return Promise.resolve(mockInfo);
          },
      });
    });
  });

  it('should be passed down the correct URL', () => {
    
  })

})
