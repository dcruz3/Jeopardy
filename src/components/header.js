import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="searchHeader">
        <button onClick={onClick}> Load Hotels </button>
      </div>
    )
  }
}
