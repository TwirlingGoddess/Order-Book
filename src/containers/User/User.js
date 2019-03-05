import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { store } from '../../index.js';
import { updateUser } from '../../actions'


export class User extends Component {

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

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(User);