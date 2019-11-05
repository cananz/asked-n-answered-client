// const USER_URL = 'http://localhost:3000/users'
const PROJECT_URL = 'http://localhost:3000/projects'
const SESSION_URL = 'http://localhost:3000/sessions/11U8J'

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

function fetchingSession() {
  return (dispatch) => {
    fetch(SESSION_URL)
    .then(response => response.json())
    .then(session => dispatch(fetchedSession(session)))

  }
}

function fetchedSession(session) {
  return {
    type: 'FETCHED_SESSION',
    payload: session
  }
}


function pinInputChange(value) {
  return {
    type: 'PIN_INPUT_CHANGE',
    payload: value
  }
}











export { fetchingProjects, fetchingSession, pinInputChange }
