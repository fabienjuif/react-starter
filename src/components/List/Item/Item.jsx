import React, { PropTypes } from 'react'

import styles from './Item.scss'

const Item = ({ className, style, name }) => (
  <li className={`${styles.item} ${className}`} style={style}>
    <span className={styles.first}>{name.first}</span>&nbsp;
    <span className={styles.last}>{name.last}</span>
  </li>
)

Item.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
}

export default Item
