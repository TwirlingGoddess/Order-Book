import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import Order from '../../components/Order/Order';
import { connect } from 'react-redux';
import { updateUser, saveOrder, displayOrders } from '../../actions';

const getFilteredOrders = (activeOrders, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return activeOrders
    case 'SHOW_CLOSED':
      return activeOrders.filter(order => order.closed)
    case 'SHOW_OPEN':
      return activeOrders.filter(order => !order.closed)
    default:
      return new Error('Unknown filter: ' + filter)
  }
};

export const SideNav = ({activeOrders}) => {
  displayOrders(activeOrders)
  const userOrders = activeOrders.map(order => (
    <Order {...order} />
  ))

  return (
    <main className="SideNav">
      <h2 className="title">Orders</h2>
      <FilterMenu />
      <article>      
        <h3 className="mini-menu">
          <p>Price</p> 
          <p>Volume</p> 
          <p>Type</p>
        </h3>
        { userOrders }
      </article>
    </main>
  )
};

export const mapStateToProps = state => ({
  activeOrders: getFilteredOrders(state.active, state.filter)
});

export const mapDispatchToProps = dispatch => ({
  displayOrders: activeOrders => dispatch(displayOrders(activeOrders))
})

SideNav.propTypes = {
  activeOrders: PropTypes.array,
  displayOrders: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)