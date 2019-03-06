import React, { Component } from 'react';
import User from '../../containers/User/User';
import Form from '../../containers/Form/Form';
import Orders from '../../containers/Orders/Orders';
import FilterMenu from '../FilterMenu/FilterMenu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeOrders } from '../../actions';
var orders = require('../../assets/order-book.json');
import OrderContainer from '../../containers/OrderContainer/OrderContainer';

import './App.css';

export class App extends Component {

  componentDidMount() {
    this.props.storeOrders(orders)
  }

        // <Orders />

  render() {
    return(
      <div className="App">
        <h1>BitCoin Order Book</h1>
        <div className="UserSection">
          <User />
          <Form />
        </div>
        <FilterMenu />
        <OrderContainer />
      </div>
    )
  }
}



export const mapDispatchToProps = dispatch => ({
  storeOrders: orders => dispatch(storeOrders(orders)),
});

export default connect(null, mapDispatchToProps)(App)