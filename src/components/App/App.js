import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../../containers/User/User';
import Form from '../../containers/Form/Form';
import Orders from '../../containers/Orders/Orders';
import { storeUsername, storeBalances } from '../../actions';

var user = require('../../assets/user.json')

// import './App.css';

export class App extends Component {


  componentDidMount() {

    const fixedUser = user.balances.reduce((accu, currency) => {
      const parsedCurrency = parseInt(currency.balance).toFixed(5)
      const newPairs = {symbol: currency.symbol, balance: parsedCurrency}
      accu.balances.push(newPairs)
      return accu
    },{name: user.name, balances: []})

    this.props.storeUsername(fixedUser.name)
    this.props.storeBalances(fixedUser.balances)
  }


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

export const mapDispatchToProps = dispatch => ({
  storeUsername: username => dispatch(storeUsername(username)),
  storeBalances: balances => dispatch(storeBalances(balances))
})


export default connect(null, mapDispatchToProps)(App);
