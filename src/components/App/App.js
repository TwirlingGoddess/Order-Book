import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import User from '../../containers/User/User'
import Orders from '../../containers/Orders/Orders'

class App extends Component {
  render() {
    return(
      <div className = "App">
        <h1>BitCoin Order Book</h1>
        <hr />
        <User />
        <hr />
        <Orders />
      </div>
    )
  }
}

export default App