import { combineReducers } from "redux";

let initialState = {
  inSession: false, //
  loggedIn: false,
  currentUser: nill,
  projects: [],
  sessionReport: {
    start: '',
    end: '',
    project: nill,
    pin: '',
    host: '',
    hostEmail: '',
    progress: nill,
    responses: [],
    responseCount: ''
  }
}
const projectsReducer = (state = initialState.projects, action) => {
  switch (action.type) {
    case 'FETCHED_PROJECTS':
      return action.payload
    default:
      return state

  }
}
// const rootReducer = combineReducers({
//   // inSession:
// })

export default projectsReducer
