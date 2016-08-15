import React, { PropTypes } from 'react'

import styles from './Filter.scss'

const Filter = ({ className, style, onChange }) => (
  <div className={`${styles.filter} ${className}`} style={style}>
    <input onChange={onChange} />
  </div>
)

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Filter
