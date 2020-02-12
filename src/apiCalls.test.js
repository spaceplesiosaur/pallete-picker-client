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
    getData('https://palette-picker-ac.herokuapp.com/api/v1/projects', 'projects')

    expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-ac.herokuapp.com/api/v1/projects')
  })

  it('should return the correct data in the correct format', () => {
    expect(getData('https://palette-picker-ac.herokuapp.com/api/v1/projects', 'projects')).resolves.toEqual(mockInfo)
  })
   it('should return an error if response is not ok', () => {
     window.fetch = jest.fn().mockImplementation(() => {
       return Promise.resolve({
         ok: false,
           json: () => {
             return Promise.resolve(mockInfo);
           },
       });
     });
     expect(getData('https://palette-picker-ac.herokuapp.com/api/v1/projects', 'projects')).rejects.toEqual(Error("projects wasn't imported"))
   })
})

describe('postProject', () => {
  let mockProject;
  let mockOptions;
  let mockReturnProject;

  beforeEach(() => {
    mockProject = {
      name: "Bathroom walls",
    };

    mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockProject.name),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    mockReturnProject = {id: 1, name: mockProject.name, current: false};

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockReturnProject);
        }
      })
    })

  })

  it('should be passed down the correct URL', () => {
    let options = mockOptions
    postProject('https://palette-picker-ac.herokuapp.com/api/v1/projects', mockProject.name)
    expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-ac.herokuapp.com/api/v1/projects', options)
  })

  it('should return the posted project', () => {
    expect(postProject('https://palette-picker-ac.herokuapp.com/api/v1/projects', mockProject.name)).resolves.toEqual(mockReturnProject)
  })

  it('should return an error when the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => {
          return Promise.resolve(mockReturnProject);
        }
      })
    })
    expect(postProject('https://palette-picker-ac.herokuapp.com/api/v1/projects', mockProject.name, 'project')).rejects.toEqual(Error("Error fetching project"))
  })
})

describe('deleteProject', () => {
  let mockDeleteOptions;
  let mockProject;

  beforeEach(() => {
    mockDeleteOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    mockProject = {id: 1, name: 'Magic', current: false}

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve('Post deleted!');
        }
      })
    })
  })

  it('should be passed down the correct URL', () => {
    let options = mockDeleteOptions;
    deleteProject(mockProject.id, options)
    expect(window.fetch).toHaveBeenCalledWith('https://palette-picker-ac.herokuapp.com/api/v1/projects/1', options)
  })
  it('should return a confirmation message', () => {
    let options = mockDeleteOptions;
    expect(deleteProject(mockProject.id, options)).resolves.toEqual('Post deleted!')
  })
  it('should throw an error if the response is not ok', () => {
    let options = mockDeleteOptions;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => {
          return Promise.resolve('Post deleted!');
        }
      })
    })
    expect(deleteProject(mockProject.id, options)).rejects.toEqual(Error('There was a problem with the delete'))
  })
})
