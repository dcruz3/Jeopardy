import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../assets/logo.svg';
import '../styles/app.css';

import { fetchHotels, fetchReviewsIfNeeded } from '../actions'

import Header from '../components/header';
import Hotels from '../components/hotels';

class App extends Component {

  render() {
    const { isLoading, hotels, error } = this.props;
    return (
      <div>
        <Header onClick={() => this.props.onSearch()} />
        {isLoading &&
          <h2>Loading...</h2>
        }
        {!isLoading && hotels.length == 0 &&
          <h2>No Hotels</h2>
        }
        {!isLoading && hotels.length > 0 &&
          <Hotels hotels={hotels} reviewsByHotel={this.props.reviewsByHotel} onShowReviews={this.props.onShowReviews}/>
        }

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { hotels, reviewsByHotel } = state


  return {
    hotels: hotels.items,
    isLoading: hotels.isFetching,
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
