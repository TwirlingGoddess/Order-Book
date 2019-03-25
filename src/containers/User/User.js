import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { store } from '../../index.js';
import { storeUsername, storeBalances } from '../../actions';
var user = require('../../assets/user.json');
import './User.css';

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
      <div className="User">
        <h1>{ store.getState().user.username }</h1>
        <h2>PHP : <em>{ store.getState().user.PHP }</em></h2>
        <h2>TCN : <em>{ store.getState().user.TestCoin }</em></h2>
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