import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import User from '../../containers/User/User';
import Form from '../../containers/Form/Form';
import Orders from '../../containers/Orders/Orders';
// import './App.css';

class App extends Component {
  render() {
    return(
      <div className = "App">
        <h1>BitCoin Order Book</h1>
        <hr />
        <div>
          <User />
          <Form />
        </div>
        <hr />
        <Orders />
      </div>
    )
  }
}

export default App