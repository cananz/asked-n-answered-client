// const USER_URL = 'http://localhost:3000/users'
const PROJECT_URL = 'http://localhost:3000/projects'
const SESSION_URL = 'http://localhost:3000/sessions'
const LIVE_SESSIONS_URL = 'http://localhost:3000/sessions/live'
// const SESSION_URL = 'http://localhost:3000/sessions/11U8J'

function fetchingLiveSessions() {
  return (dispatch) => {
    fetch(LIVE_SESSIONS_URL)
    .then(response => response.json())
    .then(liveSessionsList => dispatch(fetchedLiveSessions(liveSessionsList)))
  }
}

function fetchedLiveSessions(liveSessionsList) {
  return {type: 'FETCHED_LIVE_SESSION_LIST', payload: liveSessionsList}
}


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

function fetchingSession(pin) {
  return (dispatch) => {
    fetch(`${SESSION_URL}` + '/' + `${pin}`)
    .then(response => response.json())
    .then(sessionData => {
      dispatch(fetchedSession(sessionData))
      // dispatch(changeView('session'))
    })

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

function changeView(viewPage) {
  return {
    type: 'LOAD_VIEW',
    payload: viewPage
  }
}


function checkPin(pin) {
  return (dispatch) => {
    dispatch(toggled())
  }
}

function toggled() {
  return { type: 'PIN_IS_VALID' }
}






export { fetchingLiveSessions, fetchingProjects, fetchingSession, pinInputChange, changeView, checkPin }
