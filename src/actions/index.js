import fetch from 'isomorphic-fetch'

export const HOTELS_REQUEST = 'HOTELS_REQUEST';
export const HOTELS_SUCCESS = 'HOTELS_SUCCESS';
export const HOTELS_FAILED = 'HOTELS_FAILED';

function requestHotels() {
  return {
    type: HOTELS_REQUEST
  }
}

function requestHotelsSuccess(json) {
  return {
    type: HOTELS_SUCCESS,
    hotels: json.data.children.map(child => child.data)
  }
}

function requestHotelsFailed(error) {
  return {
    type: HOTELS_FAILED,
    error
  }
}

export function fetchHotels() {
  return dispatch => {
    dispatch(requestHotels);
    return fetch('http://fake-hotel-api.herokuapp.com/api/hotels')
      .then(response => response.json())
      .then(json => dispatch(requestHotelsSuccess(json)))
      .catch(error => dispatch(requestHotelsFailed(error)))
  }
}

export const REVIEWS_REQUEST = 'REVIEWS_REQUEST';
export const REVIEWS_SUCCESS = 'REVIEWS_SUCCESS';
export const REVIEWS_FAILED = 'REVIEWS_FAILED';
