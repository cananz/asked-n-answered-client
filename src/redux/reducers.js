import { combineReducers } from "redux";

let initialState = {
  inSession: false,

  loggedIn: false,
  currentUser: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    avatar: null,
    projects: []
  },
  // projects: [],
  sessionReport: null
    // {
    //   start: '',
    //   end: '',
    //   project: null,
    //   pin: '',
    //   host: '',
    //   hostEmail: '',
    //   progress: null,
    //   responses: [],
    //   responseCount: ''
    // }
}

const projectsReducer = (state = initialState.projects, action) => {
  switch (action.type) {
    case 'FETCHED_PROJECTS':
      return action.payload
    default:
      return state

  }
}

const rootReducer = combineReducers({
  // inSession:
  projects: projectsReducer
})

export default rootReducer
