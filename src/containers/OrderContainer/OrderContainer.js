import React from 'react';
import Order from '../../components/Order/Order';
import { toggleOrder } from '../../actions';
import { connect } from 'react-redux';
import { store } from '../../index.js';


const getFilteredOrders = (orders, filter) => {
      console.log(orders, filter)
  switch (filter) {
    case 'SHOW_ALL':
      return orders
    case 'SHOW_CLOSED':
      return orders.filter(order => order.closed)
    case 'SHOW_OPEN':
      return orders.filter(order => !order.closed)
    default:
      return new Error('Unknown filter: ' + filter)
  }
};

export const OrderContainer = ({orders}) => {
  const displayOrders = orders.map(order => (
    <Order {...order} key={order.id} />
  ))
  return (
    <article>
      { displayOrders }
    </article>
  )
};

export const mapStateToProps = state => ({
  orders: getFilteredOrders(state.orders, state.filter)
});

export default connect(mapStateToProps, null)(OrderContainer)
