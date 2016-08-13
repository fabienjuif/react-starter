import React, { PropTypes } from 'react'

const List = ({ list }) => {
  return (
    <ul>
      {list.map(l => <li key={l.email}>{l.name.first} {l.name.last}</li>)}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
}

export default List
