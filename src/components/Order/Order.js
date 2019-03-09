import React from 'react';
import './Order.css';

const Order = ({ id, price, volume, closed, total, type}) => {
  total = volume * price
  return (
    <aside
      className="Order"
      key={ id }
      style={
        { textDecoration: closed ? 'line-through' : 'none' }
      }
    >
      <h4>{ price }</h4>
      <h4>{ (volume * 1).toFixed(5) }</h4>
      <h4 className={ type }>{ (total).toFixed(5) }</h4>
    </aside>
  )
};

export default Order
