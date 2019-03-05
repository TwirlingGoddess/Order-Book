import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { store } from '../../index.js';
import { storeUsername, storeBalances } from '../../actions'

var user = require('../../assets/user.json')

export class User extends Component {


  componentDidMount() {

    const fixedUser = user.balances.reduce((accu, currency) => {
      const parsedCurrency = Number.parseFloat(currency.balance).toFixed(5)
      const newPairs = {symbol: currency.symbol, balance: parsedCurrency}
      accu.balances.push(newPairs)
      return accu
    },{name: user.name, balances: []})

    this.props.storeUsername(fixedUser.name)
    this.props.storeBalances(fixedUser.balances)
  }


  render() {

    return(
      <div>
        <h1>User</h1>
        <h2>{ store.getState().user.username }</h2>
        <h3>PHP : <em>{ store.getState().user.PHP }</em></h3>
        <h3>BTC: <em>{ store.getState().user.TestCoin }</em></h3>
      </div>
    )
  }
}


export const mapStateToProps = state => ({
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  storeUsername: username => dispatch(storeUsername(username)),
  storeBalances: balances => dispatch(storeBalances(balances))
})

User.propTypes = {
  user: PropTypes.object.isRequired,
  storeUsername: PropTypes.func.isRequired,
  storeBalances: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(User);