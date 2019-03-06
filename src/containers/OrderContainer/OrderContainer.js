import React from 'react';
import Order from '../../components/Order/Order';
import { toggleOrder } from '../../actions';
import { connect } from 'react-redux';
import { store } from '../../index.js';
import PropTypes from 'prop-types';
import { organizeBids, organizeAsks } from '../../helpers/helpers';
import './OrderContainer.css';


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
  const displayBids = organizeBids(orders).map(order => (
    <Order {...order} key={order.id} />
  ))
  const displayOrders = orders.map(order => (
    <Order {...order} key={order.id} />
  ))
  const displayAsks = organizeAsks(orders).map(order => (
    <Order {...order} key={order.id} />
  ))

  return (
    <main>
      <article>
        <h3>Bids</h3>
        { displayBids }
      </article>
      <article>
        <h3>All Orders</h3>
        { displayOrders }
      </article>
      <article>
        <h3>Asks</h3>
        { displayAsks }
      </article>
    </main>
  )
};

export const mapStateToProps = state => ({
  orders: getFilteredOrders(state.orders, state.filter)
});
// export const mapDispatchToProps = dispatch => ({
  // storeAsks: asks => dispatch(storeAsks(asks)),
  // storeBids: bids => dispatch(storeBids(bids)),
// });

OrderContainer.propTypes = {
  // storeAsks: PropTypes.func.isRequired,
  // storeBids: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(OrderContainer)
