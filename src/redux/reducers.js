import { combineReducers } from "redux";

let initialState = {
  session: {
    // responses: 0,
    prompts: []
  },
  page: "",
  landingPage: {
    pinInput: '', //11U8J
    liveSessions: [],
    pinIsValid: false,
    emailText: 'marisa@email.com'
  },
  currentUser: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    activeProjectTab: 'new',
    projects: [],
    addPrompt: false
  }
}

let profileState = {
  // page: profile,
  activeProjectTab: 'new',
  currentUser: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    projects: []
  }
}

let questionState = {
  id: '',
  content: '',
  correctAnswer: {
    id: '',
    content: '',
    correct: true
  },
  incorrectAnswers: []
}

let quizModeState = {
  id: '',
  pin: '',
  projectId: '',
  isLive: '',
  host: '',
  title: '',
  subtitle: '',
  prompts: []
}


// let a = {
//   id: '',
//   promptId: '',
//   content: '',
//   correct: ''
// }

const currentUserReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state,

          id: action.payload.id,
          email: action.payload.email,
          firstName: action.payload.first_name,
          lastName: action.payload.last_name,

          projects: action.payload.projects,
          projectDraft: {
            title: '',
            subtitle: '',
            user_id: action.payload.id
          },
          promptDraft: {
            content: '',
            img: '',
            correctAnswer: '',
            incorrectAnswerB: '',
            incorrectAnswerC: '',
            incorrectAnswerD: ''

          }
      }
    case 'FETCHED_USER_PROJECTS':
      return {...state, projects: action.payload}
    case 'SELECT_PROJECT':
      return {...state, activeProjectTab: action.payload}
    case 'NEW_PROJECT':
      return {...state, activeProjectTab: 'new'}
    case 'CHANGE_DRAFT_TITLE':
      return {...state, projectDraft: {
        ...state.projectDraft,
        title: action.payload

      }}
    case 'CHANGE_DRAFT_SUBTITLE':
      return {...state, projectDraft: {
        ...state.projectDraft,
        subtitle: action.payload
      }}
    case 'INITIATED_NEW_PROJECT':
      return {...state,
        projects: [...state.projects, action.payload]
      }
    case 'TOGGLE_SHOW_PROMPT_FORM':
      return {...state,
          addPrompt: !state.addPrompt
        }
    case 'ADDED_PROMPT_TO_PROJECT':
      return {...state,
        promptDraft: {
          content: '',
          img: '',
          correctAnswer: '',
          incorrectAnswerB: '',
          incorrectAnswerC: '',
          incorrectAnswerD: ''

        },
        projects: action.payload//[...state.projects, action.payload]
      }
    case 'CHANGE_PROMPT_DRAFT':
    // debugger
      return {...state,
      promptDraft: {...state.promptDraft, ...action.payload}
    }
    case 'DELETED_PROMPT_FROM_PROJECT':
      return {...state, projects: [...state.projects.filter(proj => proj.id !== action.payload.id), action.payload]
      }
    case 'LOG_OUT':
      return initialState.currentUser

    default: return state
  }
}

const pageReducer = (state = initialState.page, action) => {
  switch (action.type) {
    case 'LOAD_VIEW':
      return { page: action.payload }

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
    case 'LOGIN_INPUT_CHANGE':
      return {...state, emailText: action.payload}
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
      return {...action.payload}
    case 'SELECT_ANSWER':
      return {
        ...state, prompts: state.prompts.map(p => p.id === action.payload.id ? action.payload : p)
      }
    default:
      return state
  }
}

const quizModeReducer = (state = quizModeState, action) => {

  switch (action.type) {

    case 'LOADED_QUIZ':
      return {//...action.payload
        ...state,
        id: action.payload.id,
        pin: action.payload.pin,
        projectId: action.payload.projectId,
        isLive: action.payload.is_live,
        host: action.payload.host,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        numOfPrompts: action.payload.prompts.length,
        numOfAnswers: 0,
        prompts: action.payload.prompts
      }
    case 'SELECT_ANSWER':
      // let currentPrompt = state.prompts.find(prompt => prompt.id === action.payload.id)
      // debugger
      console.log('SELECT_ANSWER -> ', action.payload.selected)
      return {
        ...state,
        // numOfAnswers: state.prompts.filter(prompt => prompt.selected).length,
        prompts: state.prompts.map(promptObj => {
          if (promptObj.id === action.payload.id) {
            if (!promptObj.selected) {
              state.numOfAnswers += 1
            }
            return action.payload//{
          }else{return promptObj}
        })

      }

    default:
      return state
  }
}


const rootReducer = combineReducers(
  {
  // session: sessionReducer,
  session: quizModeReducer,
  landingPage: landingPageReducer,
  page: pageReducer,
  currentUser: currentUserReducer

  // assessment: assessmentReducer
  }
)

export default rootReducer
