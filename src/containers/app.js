import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../assets/logo.svg';
import '../styles/app.css';

import { fetchHotels, fetchReviewsIfNeeded } from '../actions'

import Header from '../components/header';
import Hotels from '../components/hotels';

class App extends Component {

  render() {
    const { isLoading, hotels } = this.props;

    return (
      <div>
        <Header onClick={() => this.props.onSearch()} />

        {this.renderErrorMessage()}

        {hotels.isFetching &&
          <h2>Loading...</h2>
        }
        {!hotels.error && !hotels.isFetching && hotels.items && hotels.items.length == 0 &&
          <h2>No Hotels</h2>
        }

        {!hotels.error && !hotels.isFetching && hotels.items &&
          <Hotels hotels={hotels.items} reviewsByHotel={this.props.reviewsByHotel} onShowReviews={this.props.onShowReviews}/>
        }

      </div>
    );
  }

  renderErrorMessage() {
    const { error } = this.props.hotels
    if(!error) {
      return
    }

    return (
      <h1> An error has ocurred: {error} </h1>
    )
  }
}

function mapStateToProps(state) {
  const { hotels, reviewsByHotel } = state


  return {
    hotels,
    reviewsByHotel
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: () => {
      dispatch(fetchHotels())
    },
    onShowReviews: (id) => {
      dispatch(fetchReviewsIfNeeded(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
