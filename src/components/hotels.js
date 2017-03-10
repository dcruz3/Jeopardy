import React, { PropTypes, Component } from 'react'
import Hotel from './hotel';

export default class Hotels extends Component {

  constructor(props) {
    super(props)
    this.getReviews = this.getReviews.bind(this)
  }

  getReviews(id) {
    let reviews = this.props.reviewsByHotel[id];
    if(!reviews) {
      this.props.onShowReviews(id)
    }
    else {
      console.log(reviews);
    }
  }

  render() {
    return (
      <ul>
        {this.props.hotels.map((hotel, i) =>
          <li key={i}>
            <Hotel {...hotel} onShowReviews={this.getReviews} reviews={this.props.reviewsByHotel[hotel.id]}/>
          </li>
        )}
      </ul>
    )
  }
}

Hotels.propTypes = {
  hotels: PropTypes.array.isRequired
}
