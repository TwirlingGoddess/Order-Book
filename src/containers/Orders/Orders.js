import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeOrders } from '../../actions'

var orders = require('../../assets/order-book.json')

export class Orders extends Component {

  constructor() {
    super()
    this.state = {
      bidsArray: [],
      asksArray: []
    }
  }

  componentDidMount() {
    this.props.storeOrders(orders)
    this.organizeBids()
    this.organizeAsks()
    // console.log(orders, this.state.asksArray, this.state.bidsArray)
  }

  organizeBids() {
    var bids = orders.filter(order => order.type === 'bid')
    var bidsSortedByVolume = bids.map(order => order.volume ).sort((a, b) => a - b)    
    bidsSortedByVolume.forEach((num) => orders.forEach((order) => {
      if(num === order.volume && order.type === "bid") {
        this.state.bidsArray.push(order)
      }
    }))
  }

  organizeAsks() {
    var asks = orders.filter(order => order.type === 'ask')
    var asksSortedByVolume = asks.map(order => order.volume ).sort((a, b) => b - a)
    asksSortedByVolume.forEach((num) => orders.forEach((order) => {
      if(num === order.volume && order.type ==="ask") {
        this.state.asksArray.push(order)
      }
    }))
  }

  render() {
    var asksList = this.state.asksArray.map((order, index) => {
      console.log(order)
      return(
        <div key={index}>
          <h3>{ order.id }</h3>
          <h4>{ order.type }</h4>
          <h4>{ order.price }</h4>
          <h4>{ order.volume }</h4>
        </div>
      )
    })
    var ordersArray = orders.map((order, index) => {
      return(
        <div key={index} className="Orders">
          <h3>{ order.id }</h3>
          <h4>{ order.type }</h4>
          <h4>{ order.price }</h4>
          <h4>{ order.volume }</h4>
        </div>
      )
    })
    var bidsList = this.state.bidsArray.map((order, index) => {
      return(
        <div key={index}>
          <h3>{ order.id }</h3>
          <h4>{ order.type }</h4>
          <h4>{ order.price }</h4>
          <h4>{ order.volume }</h4>
        </div>
      )
    })

    return(
      <div>

        <h1>Asks</h1>
        <article>
          { asksList }
        </article>

        <h1>All Orders</h1>
        <article>
          { ordersArray }
        </article>

        <h1>Bids</h1>
        <article>
          { bidsList }
        </article>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  storeOrders: user => dispatch(storeOrders(orders))
});

Orders.propTypes = {
  storeOrders: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Orders);