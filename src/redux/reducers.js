import { combineReducers } from "redux";

let initialState = {
  session: {},
  page: 'landing',
  landingPage: {
    pinInput: '11U8J',
    liveSessions: [],
    pinIsValid: true
  }
}



const pageReducer = (state = initialState.page, action) => {
  switch (action.type) {
    case 'LOAD_VIEW':
      return { ...state, page: action.payload }


    default:
      return state
  }
}

const landingPageReducer = (state=initialState.landingPage, action) => {
  switch (action.type) {
    case 'FETCHED_LIVE_SESSION_LIST':
      return {...state, liveSessions: action.payload}

    case 'PIN_IS_VALID':
      return {...state, pinIsValid: !state.pinIsValid}
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




const rootReducer = combineReducers(
  {
  session: sessionReducer,
  landingPage: landingPageReducer,
  page: pageReducer
  }
)

export default rootReducer
