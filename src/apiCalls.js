export const getData = (url, type) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(`${type} wasn't imported`)
      }
      return response.json()
    })
}
