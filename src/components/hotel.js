import React, { PropTypes, Component } from 'react'

export default class Hotel extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <button>Show Reviews</button>
      </div>
    )
  }
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired
}
