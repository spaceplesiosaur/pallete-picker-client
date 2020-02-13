export const allSetProjects = ( state=[] , action) => {
  switch(action.type) {
     case 'ADD_PROJECTS':
        debugger
        return action.projects;
    default:
        return state;
  }
}
