const USER_URL = 'http://localhost:3000/users'
const PROJECT_URL = 'http://localhost:3000/projects'

//loaded -> fetching (fetch) -> fetched (updating store)
function fetchingProjects() {
  return (dispatch) => {
    fetch(PROJECT_URL)
    .then(response => response.json())
    .then(projectsList => dispatch(fetchedProjects(projectsList)))
  }
}

function fetchedProjects(projects) {
  return {
    type: 'FETCHED_PROJECTS',
    payload: projects
  }
}

















export { fetchingProjects }
