import React from 'react'
import Filter from '../containers/Filter'

const FilterMenu = () => {
  return (
    <section className="FilterMenu">
      <Filter filter="SHOW_ALL">All Todos</Filter>
      <Filter filter="SHOW_OPEN">Active</Filter>
      <Filter filter="SHOW_CLOSED">Completed</Filter>
    </section>
  )
}

export default FilterMenu