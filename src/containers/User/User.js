import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeUser } from '../../actions'

var user = require('../../assets/user.json')

export class User extends Component {

  componentDidMount() {
    this.props.storeUser(user)
  }

  render() {
    
    var userArray = user.balances.map((duo, index) => {
      return(
        <h3 key={index}>{ duo.symbol } : <em>{ duo.balance }</em></h3>
      )
    })

    return(
      <div>
        <h1>User</h1>
        <h2>{ user.name }</h2>
        {userArray}
      </div>
    )
  }
}


export const mapDispatchToProps = dispatch => ({
  storeUser: user => dispatch(storeUser(user))
});

User.propTypes = {
  storeUser: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(User);