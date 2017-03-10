import { combineReducers } from 'redux'
import {
  HOTELS_REQUEST, HOTELS_SUCCESS, HOTELS_FAILED
} from '../actions'

function hotels(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case HOTELS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case HOTELS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    case HOTELS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        items: [],
        error: state.error
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  hotels
})

export default rootReducer;
