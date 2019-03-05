import React from 'react';
import { setFilter } from '../../actions';
import { connect } from 'react-redux';

const Filter = ({filter, children, handleClick}) => {
  return (
    <a
      href='#'
      onClick={ (e) => {
        e.preventDefault()
        handleClick(filter)
      }}
    >
      { children }
    </a>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (filter) => dispatch(setFilter(filter))
})

export default connect(null, mapDispatchToProps)(Filter)
