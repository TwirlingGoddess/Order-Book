import React from 'react';
import Order from '../../components/Order/Order';
import { connect } from 'react-redux';
import { store } from '../../index.js';
import PropTypes from 'prop-types';
import './OrderContainer.css';


export const OrderContainer = ({bidsInStore, asksInStore, spreadInStore}) => {
  const displayAsks = asksInStore.map(order => (
    <Order {...order}/>
  ))
  const displayBids = bidsInStore.map(order => (
    <Order {...order}/>
  ))

  return (
    <main className="container">
      <h3 className="menu">
        <p>Price</p> 
        <p>Volume</p> 
        <p>Total</p>
      </h3>
      <article className="columns">
        <span>Asks</span>
        { displayAsks }
      </article>
      <h4 className="spread">SPREAD : { spreadInStore }</h4>
      <h3 className="menu">
        <p>Price</p> 
        <p>Volume</p> 
        <p>Total</p>
      </h3>
      <article className="columns">
        <span>Bids</span>
        { displayBids }
      </article>
    </main>
  )
};

export const mapStateToProps = state => ({
  bidsInStore: state.bids,
  asksInStore: state.asks,
  spreadInStore: state.spread
});

OrderContainer.propTypes = {
  bidsInStore: PropTypes.array.isRequired,
  asksInStore: PropTypes.array.isRequired,
  spreadInStore: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(OrderContainer)
