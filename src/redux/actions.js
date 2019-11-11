const USER_URL = 'http://localhost:3000/users/1'
const PROJECT_URL = 'http://localhost:3000/projects'
const SESSION_URL = 'http://localhost:3000/sessions'
const LIVE_SESSIONS_URL = 'http://localhost:3000/sessions/live'
// const SESSION_URL = 'http://localhost:3000/sessions/11U8J'

//on app load - get list of pins for only live sessions
function fetchingLiveSessions() {
  return (dispatch) => {
    fetch(LIVE_SESSIONS_URL)
    .then(response => response.json())
    .then(liveSessionsList => dispatch(fetchedLiveSessions(liveSessionsList)))
  }
}

//on App load
function fetchedLiveSessions(liveSessionsList) {
  return {type: 'FETCHED_LIVE_SESSION_LIST', payload: liveSessionsList}
}

function loggingIn() {
  return dispatch => {
    fetch(USER_URL)
    .then(response => response.json())
    .then(userData => dispatch(setCurrentUser(userData)))
  }
}

function setCurrentUser(userData) {
  return {
    type: 'SET_CURRENT_USER',
    payload: userData
  }
}

function fetchingUserProjects(userId) {
  return dispatch => {
    fetch(USER_URL + `/${userId}/projects`)
    .then(response => response.json())
    .then(projectsData => dispatch(fetchedUserProjects(projectsData)))
  }
}

function fetchedUserProjects(projectsData) {
  return {
    type: 'FETCHED_USER_PROJECTS',
    payload: projectsData
  }
}

//loaded -> fetching (fetch) -> fetched (updating store)
// function fetchingProject(projectId) {
//   return (dispatch) => {
//     fetch(PROJECT_URL + `/${projectId}`)
//     .then(response => response.json())
//     .then(projectData => dispatch(fetchedProject(projectData)))
//   }
// }

function selectProject(project) {
  return {
    type: 'SELECT_PROJECT',
    payload: project
  }
}

function loadNewProjectForm() {
  return {
    type: 'NEW_PROJECT'

  }
}

//on load of session page (pin is 'this.props.match.params.pin')
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

//on load of session page
function fetchedSession(session) {
  return {
    type: 'LOADED_QUIZ',
    payload: session
  }
}

// function fetchedSession(session) {
//   return {
//     type: 'FETCHED_SESSION',
//     payload: session
//   }
// }









//landingPage
function pinInputChange(value) {
  return {
    type: 'PIN_INPUT_CHANGE',
    payload: value
  }
}

function loginInputChange(value) {
  return {
    type: 'LOGIN_INPUT_CHANGE',
    payload: value
  }
}

//what page is the app displaying now
function changeView(viewPage) {
  return {
    type: 'LOAD_VIEW',
    payload: viewPage
  }
}

//on landing page, check is the pin is a valid live session
function checkPin(pin) {
  return (dispatch) => {
    dispatch(toggled())
  }
}
//landingPage - if pin is valid, toggle the button disabled
function toggled() {
  return { type: 'PIN_IS_VALID' }
}

function selectAnswer(promptObj) {
  return {
    type: 'SELECT_ANSWER',
    payload: promptObj
  }
}

function selectingAnswer(promptObj) {
  return (dispatch) => {
    dispatch(selectAnswer(promptObj))
  }
}


export {
  fetchingLiveSessions,
  selectProject,
  fetchingUserProjects,
  loadNewProjectForm,
  fetchingSession,
  pinInputChange,
  changeView,
  checkPin,
  selectingAnswer,
  loggingIn,
  loginInputChange

}
