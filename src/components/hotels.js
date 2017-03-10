import React, { PropTypes, Component } from 'react'

export default class Hotels extends Component {
  render() {
    return (
      <ul>
        {this.props.hotels.map((hotel, i) =>
          <li key={i}>{hotel.name}</li>
        )}
      </ul>
    )
  }
}

Hotels.propTypes = {
  hotels: PropTypes.array.isRequired
}
