import React, { PropTypes, Component } from 'react'

export default class Hotel extends Component {
  constructor(props) {
    super(props);

    this.showReviews = this.showReviews.bind(this);
  }

  showReviews() {
    this.props.onShowReviews(this.props.id);
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <button onClick={this.showReviews}>Show Reviews</button>


        {this.props.reviews && this.props.reviews.length === 0 && !this.props.reviews.isLoading &&
          <p>No reviews</p>
        }

        {this.props.reviews && this.props.reviews.isLoading &&
          <p> Loading ...> </p>
        }

        {this.props.reviews &&
          <ul>
            {this.props.reviews.items.map((review, i) =>
              <li key={i}>{review.name}</li>
            )}
          </ul>
        }

      </div>
    )
  }
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired
}
