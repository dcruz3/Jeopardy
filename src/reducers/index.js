import { combineReducers } from 'redux'
import {
  HOTELS_REQUEST, HOTELS_SUCCESS, HOTELS_FAILED
} from '../actions'

function hotelsReducer(state = {
  isFetching: false,
  hotels: []
}, action) {
  switch (action.type) {
    case HOTELS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case HOTELS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hotels: action.hotels
      })
    case HOTELS_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        hotels: [],
        error: state.error
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  hotelsReducer
})

export default rootReducer;
