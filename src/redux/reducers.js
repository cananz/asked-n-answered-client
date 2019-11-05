import { combineReducers } from "redux";

let initialState = {
  session: {},
  landingPage: {
    pinInput: '11U8J'
  }
}

const landingPageReducer = (state=initialState.landingPage, action) => {
  switch (action.type) {
    case 'PIN_INPUT_CHANGE':
      return {...state, pinInput: action.payload}
    default:
      return state
  }
}

// const projectsReducer = (state = initialState.currentUser.projects, action) => {
//   switch (action.type) {
//     case 'FETCHED_PROJECTS':
//       return action.payload
//     default:
//       return state
//
//   }
// }

const sessionReducer = (state = initialState.session, action) => {
  // debugger
  switch (action.type) {
    case 'FETCHED_SESSION':
      return action.payload
    default:
      return state
  }
}


const rootReducer = combineReducers({
  session: sessionReducer,
  landingPage: landingPageReducer


})

export default rootReducer
