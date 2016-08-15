import React, { PropTypes } from 'react'

import Item from './Item'
import styles from './List.scss'

const List = ({ className, style, items }) => (
  <ul className={`${styles.list} ${className}`} style={style}>
    {items.map(id => <Item key={id} id={id} />)}
  </ul>
)

List.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default List
