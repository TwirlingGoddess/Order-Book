import React from 'react';
import Filter from '../../containers/Filter/Filter';
import './FilterMenu.css';

const FilterMenu = () => {
  return (
    <section className="FilterMenu">
      <Filter filter="SHOW_ALL">ALL</Filter>
      <Filter filter="SHOW_OPEN">OPEN</Filter>
      <Filter filter="SHOW_CLOSED">CLOSED</Filter>
    </section>
  )
}

export default FilterMenu