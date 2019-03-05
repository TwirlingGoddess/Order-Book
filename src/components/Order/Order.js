import React from 'react'

const Order = ({text, closed, handleClick}) => {
  return (
    <li
      onClick={ handleClick }
      style={
        { textDecoration: closed ? 'line-through' : 'none' }
      }
    >
      { text }
    </li>
  )
}

export default Order
