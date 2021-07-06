import {REGISTRATIONORDER} from '../actions/actionTypes'

const initialState = {
  orders: []
}

export default function reducerCart(state = initialState, action) {
  switch (action.type) {
    case REGISTRATIONORDER:
      return {
        ...state,
        orders: [...state.orders, action.data]
      }
    default:
      return state
  }
}
