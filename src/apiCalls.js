export const getData = (url, type) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(`${type} wasn't imported`)
      }
      return response.json()
    })
}


export const postProject = async (project) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const post = await fetch('https://palette-picker-ac.herokuapp.com/api/v1/projects', options)
  const newProject = await post.json()
    if(!post.ok) {
      throw Error('Error fetching project');
    }
    return newProject;
}

export const deleteProject = (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const deleteAction = fetch(`https://palette-picker-ac.herokuapp.com/api/v1/projects/${id}`, options).then(response => {
    if (!response.ok) {
          throw Error('There was a problem with the delete')
        }
        return 'Post deleted!'
  })
}


export const postPalette = async (palette) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(palette),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const postPalette = await fetch('https://palette-picker-ac.herokuapp.com/api/v1/palettes', options)
  const fetchedPalette = await postPalette.json()
    if(!postPalette.ok) {
      throw Error('Error fetching palette');
    }
    return fetchedPalette;
}