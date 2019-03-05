import React, { Component } from 'react';
import User from '../../containers/User/User';
import Form from '../../containers/Form/Form';
import Orders from '../../containers/Orders/Orders';
import FilterMenu from './FilterMenu'

// import './App.css';

export class App extends Component {


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
        <FilterMenu />
        <Orders />
      </div>
    )
  }
}



export default App;
