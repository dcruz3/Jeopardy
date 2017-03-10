import React, { PropTypes, Component } from 'react'
import Hotel from './hotel';

export default class Hotels extends Component {
  render() {
    return (
      <ul>
        {this.props.hotels.map((hotel, i) =>
          <li key={i}>
            <Hotel {...hotel} />
          </li>
        )}
      </ul>
    )
  }
}

Hotels.propTypes = {
  hotels: PropTypes.array.isRequired
}
