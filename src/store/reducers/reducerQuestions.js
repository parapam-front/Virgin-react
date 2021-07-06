import {SENDQUESTION} from '../actions/actionTypes'

const initialState = {
  questions: []
}
export default function reducerQuestions(state = initialState, action) {
  switch (action.type) {
    case SENDQUESTION:
      return {
        ...state,
        questions: [...state.questions, action.data]
      }
    default:
      return state
  }
}
