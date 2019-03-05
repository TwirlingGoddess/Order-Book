import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { storeOrders, storeAsks, storeBids } from '../../actions';
var orders = require('../../assets/order-book.json');
import './Orders.css'

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
    this.organizeAsks()
    this.organizeBids()
    this.props.storeAsks(this.state.asksArray)
    this.props.storeBids(this.state.bidsArray)
  }

  organizeAsks() {
    var asks = orders.filter(order => order.type === 'ask')
    var asksSortedByVolume = asks.map(order => order.volume ).sort((a, b) => a - b)
    asksSortedByVolume.forEach((num) => orders.forEach((order) => {
      if(num === order.volume && order.type ==="ask") {
        this.state.asksArray.push(order)
      }
    }))
  }

  organizeBids() {
    var bids = orders.filter(order => order.type === 'bid')
    var bidsSortedByVolume = bids.map(order => order.volume ).sort((a, b) => b - a)    
    bidsSortedByVolume.forEach((num) => orders.forEach((order) => {
      if(num === order.volume && order.type === "bid") {
        this.state.bidsArray.push(order)
      }
    }))
  }

  render() {
    var asksList = this.state.asksArray.map((order, index) => {
      return(
        <div key={index} className="Orders">
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
        <div key={index} className="Orders">
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
  storeOrders: orders => dispatch(storeOrders(orders)),
  storeAsks: asks => dispatch(storeAsks(asks)),
  storeBids: bids => dispatch(storeBids(bids)),
});

export const mapStateToProps = state => ({
  orders: state.orders,
  // bids: state.bids,
  // asks: state.asks
})

Orders.propTypes = {
  storeOrders: PropTypes.func.isRequired,
  storeAsks: PropTypes.func.isRequired,
  storeBids: PropTypes.func.isRequired,
  orders: PropTypes.object.isRequired,
  // bids: PropTypes.object.isRequired,
  // asks: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);