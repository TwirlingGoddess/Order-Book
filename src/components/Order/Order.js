import React from 'react';
import './Order.css';

const Order = ({ id, price, volume, closed}) => {
  return (
    <aside
      className="Order"
      // onClick={ handleClick }
      style={
        { textDecoration: closed ? 'line-through' : 'none' }
      }
    >
      <h4>{ id }</h4>
      <h4>{ price }</h4>
      <h4>{ volume }</h4>
    </aside>
  )
};

export default Order
