import React, { Component } from 'react';
import User from '../User/User';
import Form from '../Form/Form';
import SideNav from '../SideNav/SideNav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeOrders } from '../../actions';
var orders = require('../../assets/order-book.json');
import OrderContainer from '../OrderContainer/OrderContainer';
import './App.css';

export class App extends Component {

  componentDidMount() {
    this.props.storeOrders(orders)
  }


  render() {
    return(
      <div className="App">
        <h1>BitCoin Order Book</h1>
        <div className="sideBar">
          <div>
            <div className="userSection">
              <User />
              <Form />
            </div>
            <OrderContainer />
          </div>
          <SideNav />
        </div>
      </div>
    )
  }
}



export const mapDispatchToProps = dispatch => ({
  storeOrders: orders => dispatch(storeOrders(orders)),
});

export default connect(null, mapDispatchToProps)(App)