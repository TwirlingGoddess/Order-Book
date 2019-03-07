import React from 'react';
import Order from '../../components/Order/Order';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { organizeBids, organizeAsks } from '../../helpers/helpers';
import './OrderContainer.css';

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
      <h3>Bids</h3>
      <article>
        { displayBids }
      </article>
      <h3>All Orders</h3>
      <article>
        { displayOrders }
      </article>
      <h3>Asks</h3>
      <article>
        { displayAsks }
      </article>
    </main>
  )
};

export const mapStateToProps = state => ({
  orders:state.orders
});

OrderContainer.propTypes = {
  orders: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(OrderContainer)
