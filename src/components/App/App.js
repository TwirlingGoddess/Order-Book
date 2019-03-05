import React, { Component } from 'react';
import User from '../../containers/User/User';
import Form from '../../containers/Form/Form';
import Orders from '../../containers/Orders/Orders';
import FilterMenu from '../FilterMenu/FilterMenu';
import './App.css';

export class App extends Component {


  render() {
    return(
      <div className="App">
        <h1>BitCoin Order Book</h1>
        <hr />
        <div className="UserSection">
          <User />
          <Form />
        </div>
        <FilterMenu />
        <Orders />
      </div>
    )
  }
}



export default App;
