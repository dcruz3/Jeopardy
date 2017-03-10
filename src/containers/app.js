import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../assets/logo.svg';
import '../styles/app.css';

import { fetchHotels } from '../actions'

import Header from '../components/header';
import Hotels from '../components/hotels';

class App extends Component {

  constructor(props) {
    super(props)
    //this.searchHotels = this.searchHotels.bind(this)
  }

  searchHotels() {
    debugger;
    //this.props.dispatch(fetchHotels);
  }

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
          <Hotels hotels={hotels}/>
        }

      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <h2>Welcome to Hotel Search</h2>
      //   </div>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: false,
    hotels: []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: () => {
      dispatch(fetchHotels)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
