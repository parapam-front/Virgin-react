import {SENDQUESTION} from './actionTypes'

export function sendQuestionData(data) {
  return {
    type: SENDQUESTION,
    data
  }
}
